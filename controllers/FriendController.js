const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");
const cache = require("../store/cache");

module.exports = {

    get: function (name, empty_space, query, callback) {

        util.validatePlayer(name, isValid);

        function isValid(err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            const req = {
                "name": "cache:friends:" + uuid,
                "query": query
            };
            cache.getFromCache(req, function (err, cache) {
                if (!err && cache !== null) {

                    callback(null, JSON.parse(cache));
                    return
                }

                Hypixel("friends", "&uuid=" + uuid, function (error, data) {

                    APIBuilder(data, uuid, null, "friends", sendStats);

                    function sendStats(error, response) {

                        if (error) {
                            callback(error, null);
                            return
                        }

                        // Cache boosters for 10 seconds
                        redis.setex("cache:friends:" + uuid, 60 * 10, JSON.stringify(response));

                        callback(null, response);
                    }
                });
            });
        }
    }
};