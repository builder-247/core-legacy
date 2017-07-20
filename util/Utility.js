const MojangAPIManager = require("../MojangAPIManager");

function getRatio(x, y) {
    return ((x / y).toFixed(2));
}

function hypixelFormattingIsWeird(i) {
    return (i.replace("Â§", "§"));
}

function removeDashes(i) {
    return (i.replace("-", ""))
}

function colorNameToCode(color) {
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

function validatePlayer(i, callback) {

    // Check if i is uuid, there is an edge condition where i matches the format but isn't a real UUID, only way to verify this is to request
    // the Mojang API. This however adds extra delay and is therefore ignored.
    // From: https://bukkit.org/threads/best-way-to-check-if-a-string-is-a-uuid.258625/
    if ((/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(i)) {
        console.log("%s is a valid UUID", i);
        return removeDashes(i);
    } else {
        // Convert from username to UUID
        MojangAPIManager.getUUID(i, function (error, uuid) {
            if (error) {
                callback(error, null);
                return
            }

            callback(null, uuid);
        })
    }

}

function getBedwarsLevel(exp) {
    // first few levels are different
    if (exp < 500) {
        return 0;
    } else if (exp < 1500) {
        return 1;
    } else if (exp < 3500) {
        return 2;
    } else if (exp < 5500) {
        return 3;
    } else if (exp < 9000) {
        return 4;
    }

    exp -= 9000;
    return exp / 5000 + 4;
}


module.exports = {
    getRatio,
    hypixelFormattingIsWeird,
    removeDashes,
    colorNameToCode,
    validatePlayer,
    getBedwarsLevel
};