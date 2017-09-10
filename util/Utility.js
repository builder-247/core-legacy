const Mojang = require("../MojangAPIManager");
const redis = require("../store/redis");

function getRatio(x, y) {
    if (typeof x === "undefined" && typeof y === "undefined") {
        return(null)
    }
    return ((x / y).toFixed(2));
}

function hypixelFormattingIsWeird(i) {
    return (i.replace("Â§", "§"));
}

function betterFormatting(i) {
    return (i.replace("§", "&"))
}

function removeDashes(i) {
    return (i.replace("-", ""))
}

function colorNameToCode(color) {
    if (color === null) {
        return (null);
    }
    switch (color.toLowerCase()) {
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
            return ("&7");
            break;
        case "black":
            return ("&0");
            break;
    }
}

function validatePlayer(input, callback) {

    redis.get("cache:" + input, function (err, uuid) {
        if (!err && uuid !== null) {
            // console.log("[CACHE] found match for username %s :" + uuid, input);
            callback(null, uuid);
            return
        } else {
            // Check if i is uuid, there is an edge condition where i matches the format but isn't a real UUID, only way to verify this is to request
            // the Mojang API. This however adds extra delay and is therefore ignored.
            // From: https://bukkit.org/threads/best-way-to-check-if-a-string-is-a-uuid.258625/
            if ((/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(input)) {
                callback(null, removeDashes(input));
            } else {
                // Convert from username to UUID
                Mojang.getUUID(input, function (error, uuid) {
                    if (error) {
                        callback(error, null);
                        console.log("%s is not a valid username", input);
                        return
                    }

                    // Cache username:uuid for 6 hours
                    redis.setex("cache:" + input, 60 * 60 * 6, uuid);

                    callback(null, uuid);
                })
            }
        }
    });
}

module.exports = {
    getRatio,
    hypixelFormattingIsWeird,
    betterFormatting,
    removeDashes,
    colorNameToCode,
    validatePlayer,
};