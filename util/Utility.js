const Mojang = require("../MojangAPIManager");
const config = require("../config");
const request = require("request");
const urllib = require("url");
const redis = require("../store/redis");

function getRatio(x, y) {
    if (typeof x !== "number") {
        x = 0;
    }
    if (typeof y !== "number") {
        y = 0;
    }
    return ((x / y).toFixed(2));
}

function betterFormatting(i) {
    return (i.replace("Â§", "§").replace("§", "&"))
}

function removeDashes(i) {
    return (i.replace("-", ""))
}

/**
 * Creates a job object for enqueueing that contains details such as the Hypixel endpoint to hit
 * See https://github.com/HypixelDev/PublicAPI/tree/master/Documentation/methods
 * */
function generateJob(type, payload) {
    const api_url = "https://api.hypixel.net";
    let api_key = config.HYPIXEL_API_KEY;
    const opts = {
        boosters() {
            return {
                url: `${api_url}/boosters?key=${api_key}`
            };
        },
        findguild() {
            return {
                url: `${api_url}/findguild?key=${api_key}&byUuid=${payload.id}`
            };
        },
        guild() {
            return {
                url: `${api_url}/guild?key=${api_key}&id=${payload.id}`
            };
        },
        key() {
            return {
                url: `${api_url}/key?key=${api_key}`
            };
        },
        session() {
            return {
                url: `${api_url}/session?key=${api_key}&uuid=${payload.id}`
            };
        },
        player() {
            return {
                url: `${api_url}/player?key=${api_key}&uuid=${payload.id}`
            };
        },
        watchdogstats() {
            return {
                url: `${api_url}/watchdogstats?key=${api_key}`
            };
        },

    };
    return opts[type]();
}

/**
 * A wrapper around HTTPS requests that handles:
 *
 *
 * */
function getData(url, cb) {
    if (typeof url === 'object' && url && url.url) {
        u = url.url;
    } else {
        u = url;
    }
    const parse = urllib.parse(u, true);
    const hypixel_api = parse.host === 'api.hypixel.net';
    const mojang_api = parse.host === 'api.mojang.com';
    const target = urllib.format(parse);
    return request({
        url: target,
        json: true
    },(err, res, body) => {
        if (err
            || !res
            || res.statusCode !== 200
            || !body
        ) {
            console.error(`[INVALID] status`)
        } else if (hypixel_api && !body.success) {
            console.error(`[Hypixel API Error]: ${body.cause}`)
        }
        cb(null, body);
    })
}

function colorNameToCode(color) {
    if (color === null) {
        return (null);
    }
    switch (color.toLowerCase()) {
        case "gray":
            return("&7");
            break;
        case "red":
            return("&c");
            break;
        case "green":
            return ("&a");
            break;
        case "gold":
            return ("&6");
            break;
        case "light_purple":
            return ("&d");
            break;
        case "yellow":
            return ("&e");
            break;
        case "white":
            return ("&f");
            break;
        case "blue":
            return ("&9");
            break;
        case "dark_green":
            return ("&2");
            break;
        case "dark_red":
            return ("&4");
            break;
        case "dark_aqua":
            return ("&3");
            break;
        case "dark_purple":
            return ("&5");
            break;
        case "dark_gray":
            return ("&8");
            break;
        case "black":
            return ("&0");
            break;
    }
}

function validatePlayer(input, callback) {

    redis.get("cache:uuid:" + input, function (err, uuid) {
        if (!err && uuid !== null) {
            // console.log("[CACHE] found match for username %s :" + uuid, input);
            callback(null, uuid);
            return
        } else {
            // Check if input is non dashed uuid.
            if ((/^[0-9a-f]{32}$/i).test(input)) {
                callback(null, removeDashes(input));
            }
            // Check if input is uuid, there is an edge condition where input matches the format but isn't a real UUID, only way to verify this is to request
            // the Mojang API. This however adds extra delay and is therefore ignored.
            // From: https://bukkit.org/threads/best-way-to-check-if-a-string-is-a-uuid.258625/
            else if ((/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(input)) {
                callback(null, input);
            } else {
                // Convert from username to UUID
                Mojang.getUUID(input, function (error, uuid) {
                    if (error) {
                        callback(error, null);
                        console.log("%s is not a valid username", input);
                        return
                    }

                    // Cache username:uuid for 6 hours
                    redis.setex("cache:uuid:" + input, 60 * 60 * 6, uuid);

                    callback(null, uuid);
                })
            }
        }
    });
}

module.exports = {
    getRatio,
    betterFormatting,
    generateJob,
    getData,
    removeDashes,
    colorNameToCode,
    validatePlayer,
};