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
                "name": "cache:session:" + uuid,
                "query": query
            };
            cache.getFromCache(req, function (err, cache) {
                if (!err && cache !== null) {

                    callback(null, JSON.parse(cache));
                    return
                }

                Hypixel("session", "&uuid=" + uuid, function (error, data) {

                    APIBuilder(data, uuid, null, "session", sendStats);

                    function sendStats(error, response) {

                        if (error) {
                            callback(error, null);
                            return
                        }

                        // Cache session for 60 seconds
                        redis.setex("cache:session:" + uuid, 60, JSON.stringify(response));

                        callback(null, response);
                    }
                });
            });
        }
    }
};