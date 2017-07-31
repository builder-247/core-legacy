const ILeveling = require("../../util/ILeveling");
const util = require("../../util/utility");
const Mojang = require("../../MojangAPIManager");

module.exports = function (data, uuid) {

    const player = data.player;

    if (player.rank === "NORMAL") {
        const rank = player.newPackageRank || player.packageRank || null;
    } else {
        const rank = player.rank || player.newPackageRank || player.packageRank || null;
    }

    const level = ILeveling.getTrueLevel(player.networkExp, player.networkLevel);
    const karma = (player.karma || 0);

    const rank_plus_color = (util.colorNameToCode(player.rankPlusColor) || null);

    if (typeof player.prefix !== "undefined") {
        const prefix = null;
    } else {
        const prefix = utility.hypixelFormattingIsWeird(player.prefix);
    }

    const first_login = player.firstLogin;
    const last_login = player.lastLogin;

    const names = Mojang.getNameHistory(uuid, handleNames);

    function handleNames(error, names) {
        if (error) {
            return [];
        }
        return names;
    }

    const newStats = {

        "rank": rank,
        "rank_plus_color": rank_plus_color,
        "prefix": prefix,

        "level": level,
        "karma": karma,

        "first_login": first_login,
        "last_login": last_login

    };

    return(newStats)

};