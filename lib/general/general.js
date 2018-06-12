const ILeveling = require("../../util/ILeveling");
const util = require("../../util/Utility");
const Mojang = require("../../MojangAPIManager");

function getNameHistory(uuid) {
    Mojang.getNameHistory(uuid, function (error, names) {

        if (error) {
            return (null); // TODO
        } else {
            return (names);
        }

    });
}

module.exports = function (data, stats, uuid) {

    let rank, prefix;
    let total_coins = 0;
    let total_kills = 0;
    let total_wins = 0;

    const player = data.player || {};
    const _stats = player.stats || {};
    const legacy = _stats.Legacy || {};    // Classic lobby stuff, tokens etc.
    const social = data.player.socialMedia || {};
    const gifts = data.player.giftingMeta || {};

    if (player.rank === "NORMAL") {
        rank = player.newPackageRank || player.packageRank || null;
    } else {
        rank = player.rank || player.newPackageRank || player.packageRank || null;
    }

    if (rank === "MVP_PLUS" && player.monthlyPackageRank === "SUPERSTAR") {
        rank = "MVP_PLUS_PLUS"
    }

    if (rank === "NONE") {
        rank = null;
    }

    const online = (player.lastLogin > player.lastLogout);

    const username = player.displayname || null;
    const level = ILeveling.getTrueLevel(player.networkExp || 0, player.networkLevel || 0);
    const karma = (player.karma || 0);

    const rank_plus_color = util.colorNameToCode(player.rankPlusColor || "RED");

    if (typeof player.prefix === "undefined") {
        prefix = null;
    } else {
        prefix = util.betterFormatting(player.prefix);
    }

    for (let key in stats) {
        if (stats.hasOwnProperty(key)) {
            if (stats[key].hasOwnProperty("coins")) {
                total_coins += stats[key].coins;
            }
            if (stats[key].hasOwnProperty("kills")) {
                total_kills += stats[key].kills;
            }
            if (stats[key].hasOwnProperty("wins")) {
                total_wins += stats[key].wins;
            }
        }
    }

    const mc_version = player.mcVersionRp;

    const first_login = player.firstLogin;
    const last_login = player.lastLogin;

    const last_game = player.mostRecentGameType;

    const reward_streak = player.rewardScore;
    const reward_best = player.rewardHighScore;
    const reward_tokens = player.adsense_tokens;

    const language = player.userLanguage;

    const gifts_sent = gifts.bundlesGiven || 0;
    const gifts_received = gifts.bundlesReceived || 0;
    const generosity = player.fortuneBuff || 0;

    const links = social.links || {};

    const twitter = links.TWITTER || (social.TWITTER)
        ? "https://twitter.com/" + social.TWITTER
        : null;
    const youtube = links.YOUTUBE || (social.YOUTUBE)
        ? ("https://youtube.com/c/" + social.YOUTUBE).replace(/0;/g, "").replace(/1;/g, "")
        : null;
    const instagram = links.INSTAGRAM || (social.INSTAGRAM)
        ? "https://www.instagram.com/" + social.INSTAGRAM
        : null;
    const twitch = links.TWITCH || (social.TWITCH)
        ? "https://twitch.tv/" + social.TWITCH
        : null;
    const mixer = links.MIXER || (social.BEAM)
        ? "https://mixer.com/" + social.BEAM
        : null;
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
            "username": username,
            "online": online,

            "rank": rank,
            "rank_plus_color": rank_plus_color,
            "prefix": prefix,

            "level": level,
            "karma": karma,

            "total_coins": total_coins,
            "total_kills": total_kills,
            "total_wins": total_wins,

            "mc_version": mc_version,

            "first_login": first_login,
            "last_login": last_login,

            "last_game": last_game,

            "reward_streak": reward_streak,
            "reward_best": reward_best,
            "reward_tokens": reward_tokens,

            "gifts_sent": gifts_sent,
            "gifts_received": gifts_received,
            "generosity": generosity,

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