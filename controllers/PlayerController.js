const Player = require("../models/Player");
const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");

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
    get: function (name, resource, callback) {

        util.validatePlayer(name, isValid);

        function isValid(err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            redis.get("cache:player:" + uuid, function (err, cache) {
                if (!err && cache !== null) {
                    console.log("[CACHE] found stats for user %s", uuid);

                    if (resource !== null) {
                        callback(null, JSON.parse(cache)[resource]);
                    } else {
                        callback(null, JSON.parse(cache));
                    }
                    return
                }

                Hypixel("player", "&uuid=" + uuid, function (error, data) {

                    APIBuilder(data, uuid, resource, "player", sendStats);

                    function sendStats(error, response) {

                        if (error) {
                            callback(error, null);
                            return
                        }

                        // Cache players for 5 minutes
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