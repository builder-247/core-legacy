const util = require("../../util/utility");

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

module.exports = function (data, uuid) {

    const bedwars = data.player.stats.Bedwars || {};

    const coins = (bedwars.coins || 0);
    const level = getBedwarsLevel(bedwars.Experience || 0);
    const exp = (bedwars.Experience || 0);

    const wins = (bedwars.wins_bedwars || 0);
    const losses = (bedwars.losses_bedwars || 0);
    const kills = (bedwars.kills_bedwars || 0);
    const deaths = (bedwars.deaths_bedwars || 0);
    const k_d = util.getRatio(kills, deaths);
    const w_L = util.getRatio(wins, losses);
    const winstreak = (bedwars.winstreak || 0);

    const beds_broken = (bedwars.beds_broken_bedwars || 0);
    const beds_lost = (bedwars.beds_lost_bedwars || 0);
    const bed_ratio = util.getRatio(beds_broken, beds_lost);

    const final_kills = (bedwars.final_kills_bedwars || 0);
    const final_deaths = (bedwars.final_deaths_bedwars || 0);
    const final_k_d = util.getRatio(final_kills, final_deaths);

    const void_kills = (bedwars.void_kills_bedwars || 0);
    const void_deaths = (bedwars.void_deaths_bedwars || 0);

    const gamemodes = {
        "solo": {
            "kills": (bedwars.eight_one_kills_bedwars || 0),
            "deaths": (bedwars.eight_one_deaths_bedwars || 0),
            "wins": (bedwars.eight_one_wins_bedwars || 0),
            "losses": (bedwars.eight_one_losses_bedwars || 0),
            "final_kills": (bedwars.eight_one_final_kills_bedwars || 0),
            "final_deaths": (bedwars.eight_one_deaths_bedwars || 0),
            "beds_broken": (bedwars.eight_one_beds_broken_bedwars || 0),
            "beds_lost": (bedwars.eight_one_beds_lost_bedwars || 0),
            "k_d": util.getRatio((bedwars.eight_one_kills_bedwars || 0), (bedwars.eight_one_deaths_bedwars || 0)),
            "w_l": util.getRatio((bedwars.eight_one_wins_bedwars || 0), (bedwars.eight_one_losses_bedwars || 0)),
            "final_kd": util.getRatio((bedwars.eight_one_final_kills_bedwars || 0), (bedwars.eight_one_deaths_bedwars || 0)),
            "bed_ratio": util.getRatio((bedwars.eight_one_beds_broken_bedwars || 0), (bedwars.eight_one_beds_lost_bedwars || 0))
        },
        "doubles": {
            "kills": (bedwars.eight_two_kills_bedwars || 0),
            "deaths": (bedwars.eight_two_deaths_bedwars || 0),
            "wins": (bedwars.eight_two_wins_bedwars || 0),
            "losses": (bedwars.eight_two_losses_bedwars || 0),
            "final_kills": (bedwars.eight_two_final_kills_bedwars || 0),
            "final_deaths": (bedwars.eight_two_deaths_bedwars || 0),
            "beds_broken": (bedwars.eight_two_beds_broken_bedwars || 0),
            "beds_lost": (bedwars.eight_two_beds_lost_bedwars || 0),
            "k_d": util.getRatio((bedwars.eight_two_kills_bedwars || 0), (bedwars.eight_two_deaths_bedwars || 0)),
            "w_l": util.getRatio((bedwars.eight_two_wins_bedwars || 0), (bedwars.eight_two_losses_bedwars || 0)),
            "final_kd": util.getRatio((bedwars.eight_two_final_kills_bedwars || 0), (bedwars.eight_two_deaths_bedwars || 0)),
            "bed_ratio": util.getRatio((bedwars.eight_two_beds_broken_bedwars || 0), (bedwars.eight_two_beds_lost_bedwars || 0))
        },
        "3v3v3v3": {
            "kills": (bedwars.four_three_kills_bedwars || 0),
            "deaths": (bedwars.four_three_deaths_bedwars || 0),
            "wins": (bedwars.four_three_wins_bedwars || 0),
            "losses": (bedwars.four_three_losses_bedwars || 0),
            "final_kills": (bedwars.four_three_final_kills_bedwars || 0),
            "final_deaths": (bedwars.four_three_deaths_bedwars || 0),
            "beds_broken": (bedwars.four_three_beds_broken_bedwars || 0),
            "beds_lost": (bedwars.four_three_beds_lost_bedwars || 0),
            "k_d": util.getRatio((bedwars.four_three_kills_bedwars || 0), (bedwars.four_three_deaths_bedwars || 0)),
            "w_l": util.getRatio((bedwars.four_three_wins_bedwars || 0), (bedwars.four_three_losses_bedwars || 0)),
            "final_kd": util.getRatio((bedwars.four_three_final_kills_bedwars || 0), (bedwars.four_three_deaths_bedwars || 0)),
            "bed_ratio": util.getRatio((bedwars.four_three_beds_broken_bedwars || 0), (bedwars.four_three_beds_lost_bedwars || 0))
        },
        "4v4v4v4": {
            "kills": (bedwars.four_four_kills_bedwars || 0),
            "deaths": (bedwars.four_four_deaths_bedwars || 0),
            "wins": (bedwars.four_four_wins_bedwars || 0),
            "losses": (bedwars.four_four_losses_bedwars || 0),
            "final_kills": (bedwars.four_four_final_kills_bedwars || 0),
            "final_deaths": (bedwars.four_four_deaths_bedwars || 0),
            "beds_broken": (bedwars.four_four_beds_broken_bedwars || 0),
            "beds_lost": (bedwars.four_four_beds_lost_bedwars || 0),
            "k_d": util.getRatio((bedwars.four_four_kills_bedwars || 0), (bedwars.four_four_deaths_bedwars || 0)),
            "w_l": util.getRatio((bedwars.four_four_wins_bedwars || 0), (bedwars.four_four_losses_bedwars || 0)),
            "final_kd": util.getRatio((bedwars.four_four_final_kills_bedwars || 0), (bedwars.four_four_deaths_bedwars || 0)),
            "bed_ratio": util.getRatio((bedwars.four_four_beds_broken_bedwars || 0), (bedwars.four_four_beds_lost_bedwars || 0))
        }
    };

    const boxes = {
        "current_boxes": (bedwars.bedwars_boxes || 0),
        "opened_boxes": (bedwars.bedwars_box || 0),
        "commons": (bedwars.bedwars_box_commons || 0),
        "rares": (bedwars.bedwars_box_rares || 0),
        "epics": (bedwars.bedwars_box_epics || 0),
        "legendaries": (bedwars.bedwars_box_legendaries || 0),
    };

    const resources = {
        "iron": (bedwars.iron_resources_collected_bedwars || 0),
        "gold": (bedwars.gold_resources_collected_bedwars || 0),
        "diamond": (bedwars.diamond_resources_collected_bedwars || 0),
        "emerald": (bedwars.gold_resources_collected_bedwars || 0),
    };

    return (
        {
            "coins": coins,
            "level": level,
            "exp": exp,
            "wins": wins,
            "losses": losses,
            "kills": kills,
            "deaths": deaths,
            "k_d": k_d,
            "w_l": w_L,
            "winstreak": winstreak,
            "beds_broken": beds_broken,
            "beds_lost": beds_lost,
            "bed_ratio": bed_ratio,
            "final_kills": final_kills,
            "final_deaths": final_deaths,
            "final_k_d": final_k_d,
            "void_kills": void_kills,
            "void_deaths": void_deaths,
            "gamemodes": gamemodes,
            "boxes": boxes,
            "resources": resources
        }
    )
};