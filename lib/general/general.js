const ILeveling = require("../../util/ILeveling");
const util = require("../../util/utility");
const Mojang = require("../../MojangAPIManager");

module.exports = function (data, uuid) {

    let rank, prefix;

    const player = data.player;
    const legacy = data.player.stats.Legacy;    // Classic lobby stuff, tokens etc.

    if (player.rank === "NORMAL") {
        const rank = player.newPackageRank || player.packageRank || null;
    } else {
        rank = player.rank || player.newPackageRank || player.packageRank || null;
    }

    const level = ILeveling.getTrueLevel(player.networkExp, player.networkLevel);
    const karma = (player.karma || 0);

    const rank_plus_color = (util.colorNameToCode(player.rankPlusColor) || null);

    if (typeof player.prefix === "undefined") {
        prefix = null;
    } else {
        prefix = util.hypixelFormattingIsWeird(player.prefix);
    }

    const mc_version = player.mcVersionRp;

    const first_login = player.firstLogin;
    const last_login = player.lastLogin;

    const reward_streak = player.rewardScore;
    const reward_best = player.rewardHighScore;
    const reward_tokens = player.adsense_tokens;

    const language = player.userLanguage;

    const names = Mojang.getNameHistory(uuid, handleNames);

    function handleNames(error, names) {
        if (error) {
            return [];
        }
        return names;
    }


    return (
        {
            "uuid": uuid,
            "name_history": names,

            "rank": rank,
            "rank_plus_color": rank_plus_color,
            "prefix": prefix,

            "level": level,
            "karma": karma,

            "first_login": first_login,
            "last_login": last_login

        }
    )
};