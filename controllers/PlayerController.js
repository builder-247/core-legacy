const Player = require("../models/Player");
const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");
const cache = require("../store/cache");

module.exports = {

    find: function (params, callback) {
        Player.find(params, function (err, players) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, players)
        })
    },

    findById: function (id, callback) {
        Player.findById(id, function (err, player) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, player)
        })
    },

    // Name can be either username or dashed UUID.
    get: function (name, resource, query, callback) {

        if (typeof name !== "string") {
            callback("Invalid username parameter", null);
            return
        }

        util.validatePlayer(name, isValid);

        function isValid(err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            const req = {
                "name": "cache:player:" + uuid,
                "type": "player",
                "query": query
            };
            cache.getFromCache(req, function (err, _cache) {
                if (!err && _cache !== null) {

                    if (resource !== null) {
                        callback(null, JSON.parse(_cache)[resource]);
                    } else {
                        callback(null, JSON.parse(_cache));
                    }
                    return
                }

                Hypixel("player", "&uuid=" + uuid, function (error, data) {

                    if (error) {
                        callback(error, null);
                        return
                        // retry from cache
                    }

                    APIBuilder(data, uuid, resource, "player", sendStats);

                    function sendStats(error, response) {

                        if (error) {
                            callback(error, null);
                            return
                        }

                        // Cache players for 5 minutes

                        const req = {
                            "type": "player",
                            "id": uuid,
                            "data": response
                        };

                        cache.writeToCache(req, function(cb) {
                            console.log(cb)
                        });

                        redis.setex("cache:player:" + uuid, 60 * 5 , JSON.stringify(response));

                        if (resource !== null) {
                            callback(null, response[resource]);
                        } else {
                            callback(null, response);
                        }
                    }
                });
            });
        }
    },


    update: function (id, params, callback) {
        Player.findByIDAndUpdate(id, params, {new: true}, function (err, player) {
            if (err) {
                callback(err, null);
                return
            }

            callback(null, player)
        })
    },

    delete: function (id, callback) {
        Player.findByIdAndRemove(id, function (err) {
            if (err) {
                callback(err, null);
                return
            }

            callback(null, null)
        })
    }

};