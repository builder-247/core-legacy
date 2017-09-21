const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");

module.exports = {

    get: function (name, empty_space, callback) {

        util.validatePlayer(name, isValid);

        function isValid(err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            redis.get("cache:friends:" + uuid, function (err, cache) {
                if (!err && cache !== null) {
                    console.log("[CACHE] found friends for %s", uuid);

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