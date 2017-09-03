const ILeveling = require("../../util/ILeveling");
const util = require("../../util/Utility");
const Mojang = require("../../MojangAPIManager");

module.exports = function (data, stats, uuid) {

    let rank, prefix;
    let name_history = [];

    function nameHistory(uuid) {
        Mojang.getNameHistory(uuid, function(error, names) {
            if (error) {

            } else {
                name_history = names;
            }
        });
    }

    const player = data.player || {};
    const legacy = data.player.stats.Legacy || {};    // Classic lobby stuff, tokens etc.
    const social = data.player.socialMedia || {};

    nameHistory(uuid);

    if (player.rank === "NORMAL") {
        const rank = player.newPackageRank || player.packageRank || null;
    } else {
        rank = player.rank || player.newPackageRank || player.packageRank || null;
    }

    const username = player.displayname || null;
    const level = ILeveling.getTrueLevel(player.networkExp, player.networkLevel);
    const karma = (player.karma || 0);

    const rank_plus_color = util.colorNameToCode(player.rankPlusColor || null);

    if (typeof player.prefix === "undefined") {
        prefix = null;
    } else {
        prefix = util.hypixelFormattingIsWeird(player.prefix);
    }

    const mc_version = player.mcVersionRp;

    const first_login = player.firstLogin;
    const last_login = player.lastLogin;

    const last_game = player.mostRecentGameType;

    const reward_streak = player.rewardScore;
    const reward_best = player.rewardHighScore;
    const reward_tokens = player.adsense_tokens;

    const language = player.userLanguage;

    const links = social.links || {};

    const twitter = links.TWITTER || null;
    const youtube = links.YOUTUBE || null;
    const instagram = links.INSTAGRAM || null;
    const twitch = links.TWITCH || null;
    const mixer = links.MIXER || null;
    const discord = links.DISCORD || null;
    const hypixel = links.HYPIXEL || null;

    const tokens_total = legacy.total_tokens || 0;
    const tokens_quake = legacy.quakecraft_tokens || 0;
    const tokens_vampirez = legacy.vampirez_tokens || 0;
    const tokens_arena = legacy.arena_tokens || 0;
    const tokens_tkr = legacy.gingerbread_tokens || 0;
    const tokens_walls = legacy.walls_tokens || 0;
    const tokens_paintball = legacy.paintball_tokens || 0;

    return (
        {
            "uuid": uuid,
            "username":  username,
            "name_history": name_history,

            "rank": rank,
            "rank_plus_color": rank_plus_color,
            "prefix": prefix,

            "level": level,
            "karma": karma,

            "mc_version": mc_version,

            "first_login": first_login,
            "last_login": last_login,

            "last_game": last_game,

            "reward_streak": reward_streak,
            "reward_best": reward_best,
            "reward_tokens": reward_tokens,

            "language": language,

            "social_media": {
                "twitter": twitter,
                "youtube": youtube,
                "instagram": instagram,
                "twitch": twitch,
                "mixer": mixer,
                "discord": discord,
                "hypixel": hypixel
            },

            "classic": {
                "tokens_total": tokens_total,
                "tokens_quake": tokens_quake,
                "tokens_vampirez": tokens_vampirez,
                "tokens_arena": tokens_arena,
                "tokens_tkr": tokens_tkr,
                "tokens_walls": tokens_walls,
                "tokens_paintball": tokens_paintball
            }

        }
    )
};