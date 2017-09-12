const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");
const redis = require("../store/redis");

module.exports = {

    get: function (name, resource, callback) {

        console.log(name);


        util.validatePlayer(name, isValid);

        function isValid(err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            Hypixel("findGuild", "&byUuid=" + uuid, function(error, find_guild) {

                if (error) {
                    callback(error, null);
                    return
                }

                if (find_guild.guild === null) {
                    callback(null, null);
                    return
                }

                const guild_id = find_guild.guild;

                redis.get("cache:guild:" + guild_id, function (err, cache) {
                    if (!err && cache !== null) {
                        console.log("[CACHE] found guild %s", guild_id);

                        if (resource !== null) {
                            callback(null, JSON.parse(cache)[resource]);
                        } else {
                            callback(null, JSON.parse(cache));
                        }
                        return
                    }

                    Hypixel("guild", "&id=" + guild_id, function (error, data) {

                        APIBuilder(data, null, resource, "guild", sendStats);

                        function sendStats(error, response) {

                            if (error) {
                                callback(error, null);
                                return
                            }

                            // Cache guild stats for 10 minutes
                            redis.setex("cache:guild:" + guild_id , 60 * 10 , JSON.stringify(response));
                            callback(null, response);
                        }
                    });
                });
            });
        }
    }
};