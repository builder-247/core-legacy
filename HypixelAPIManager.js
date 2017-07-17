var request = require("request");
var RateLimiter = require("limiter").RateLimiter;
var config = require("./config");
var limiter = new RateLimiter(config.HYPIXEL_API_LIMIT, "minute");

var api_key = config.HYPIXEL_API_KEY;

var API_IS_DOWN = false;

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

    if (!API_IS_DOWN) {
        limiter.removeTokens(1, function () {
            console.log("https://api.hypixel.net/" + type + "?key=" + api_key + param);
            request("https://api.hypixel.net/" + type + "?key=" + api_key + param, function (error, response, body) {
                var e = JSON.parse(body);
                if (error) {
                    callback(error, null);
                    throw error;
                } else if (e.success === false) {
                    console.log("[Hypixel API Error]: " + e.cause)

                } else {
                    console.log(e);
                    callback(e, null);
                }

            })
        })
    } else {
        console.log("Ye dun goofed")
    }
};