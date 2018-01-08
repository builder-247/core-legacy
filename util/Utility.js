const Mojang = require("../MojangAPIManager");
const config = require("../config");
const request = require("request");
const urllib = require("url");
const redis = require("../store/redis");
const cache = require("../store/cache");

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
    if (typeof i !== "string") {
        return (i);
    }
    return (i.replace(/Â§/g, "§").replace(/§/g, "&"));
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
        friends() {
            return {
                url: `${api_url}/friends?key=${api_key}&uuid=${payload.id}`
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
        json: hypixel_api
    }, (err, res, body) => {
        if (err
            || !res
            || res.statusCode !== 200
            || !body
        ) {
            console.error(`[INVALID] status`);
            return cb("Request failed", null);
        } else if (hypixel_api && !body.success) {
            console.error(`[Hypixel API Error]: ${body.cause}`);
            return cb(`${body.cause}`, null)
        } else if (mojang_api && body.error) {
            console.error(`[Mojang API Error]: ${body.error} : ${body.errorMessage}`);
            return cb(`${body.error} : ${body.errorMessage}`, null)
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
            return ("&7");
            break;
        case "red":
            return ("&c");
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

module.exports = {
    getRatio,
    betterFormatting,
    generateJob,
    getData,
    removeDashes,
    colorNameToCode
};