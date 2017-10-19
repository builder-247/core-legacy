const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");
const cache = require("../store/cache");

module.exports = {

    get: function (resource, empty_space, query, callback) {

        const req = {
            "name": "cache:boosters",
            "query": query
        };
        cache.getFromCache(req, function (err, cache) {
            if (!err && cache !== null) {

                if (resource !== null) {
                    callback(null, JSON.parse(cache)[resource]);
                } else {
                    callback(null, JSON.parse(cache));
                }
                return
            }

            Hypixel("boosters", "", function (error, data) {

                APIBuilder(data, null, resource, "boosters", sendStats);

                function sendStats(error, response) {

                    if (error) {
                        callback(error, null);
                        return
                    }

                    // Cache boosters for 10 seconds
                    redis.setex("cache:boosters", 10, JSON.stringify(response.boosters));

                    if (resource !== null) {
                        callback(null, response.boosters[resource]);
                    } else {
                        callback(null, response);
                    }
                }
            });
        });
    }
};