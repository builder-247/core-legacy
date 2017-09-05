const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const smash = data.player.stats.SuperSmash || {};

    const coins = (smash.coins || 0);
    const smash_level = (smash.smashLevel || 0);

    const kills = (smash.kills || 0);
    const deaths = (smash.deaths || 0);
    const wins = (smash.wins || 0);
    const losses = (smash.losses || 0);
    const k_d = util.getRatio(kills, deaths);
    const w_l = util.getRatio(wins, losses);

    const selected_class = (smash.active_class || null);
    const win_streak = (smash.win || 0);

    const active_booster = [((smash.hero_level_booster_active && smash.hero_level_booster_active.value) || 0), ((smash.hero_level_booster_active && smash.hero_level_booster_active.plays) || 0)];

    const boosters_100 = (smash.expBooster_purchases_100_plays || 0);
    const boosters_50 = (smash.expBooster_purchases_50_plays || 0);
    const boosters_30 = (smash.expBooster_purchases_30_plays || 0);
    const boosters_10 = (smash.expBooster_purchases_10_plays || 0);

    return (
        {
            "coins": coins
        }
    )
};