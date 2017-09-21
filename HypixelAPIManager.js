const request = require("request");
const RateLimiter = require("limiter").RateLimiter;
const config = require("./config");
const limiter = new RateLimiter(config.HYPIXEL_API_LIMIT, "minute");
const redis = require("./store/redis");

const api_key = config.HYPIXEL_API_KEY;

let API_IS_DOWN = false;

// See https://github.com/HypixelDev/PublicAPI/tree/master/Documentation/methods
module.exports = function (type, param, callback) {

    // key, ""
    // boosters, ""
    // watchdogstats, ""
    // player, "&uuid=" + uuid
    // guild, "&id=" + guild_id
    // findguild, "&byUuid" + uuid
    // session, "&uuid=" + uuid
    // friends, "&uuid=" + uuid

    redis.get("API_IS_DOWN", function(err, API_IS_DOWN) {
        if (!API_IS_DOWN) {
            limiter.removeTokens(1, function () {
                // console.log("https://api.hypixel.net/" + type + "?key=" + api_key + param);
                request("https://api.hypixel.net/" + type + "?key=" + api_key + param, function (error, response, _body) {
                    const body = JSON.parse(_body);
                    if (error) {
                        callback(error, null);
                        throw error;
                    } else if (response.statusCode !== 200) {

                        //setTimeout(null, 5000)

                    } else if (body.success === false) {
                        console.log("[Hypixel API Error]: " + body.cause);
                        redis.setex("API_IS_DOWN", 5, true);
                        callback(body.cause, null)

                    } else {
                        callback(null, body);
                    }

                })
            })
        } else {
            callback("API is down!", null);
        }
    });
};