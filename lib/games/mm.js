const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const mm = stats.MurderMystery || {};

    const coins = (mm.coins || 0);
    const wins = (mm.wins || 0);
    const losses = (mm.games || 0 - wins);
    const kills = (mm.kills || 0);
    const deaths = (mm.deaths || 0);
    const hero_wins = (mm.was_hero || 0);

    const bow_kills = (mm.bow_kills || 0);

    const gold_picked_up = (mm.coins_pickedup || 0);

    const gamemodes = {
        "classic": {},
        "assasins": {},
        "hardcore": {}
    };

    const maps = {
        "ancient_tomb": {},
        "archives": {},
        "cruise_ship": {},
        "gold_rush": {},
        "headquarters": {},
        "hollywood": {},
        "hypixel_world": {},
        "library": {},
        "towerfall": {},
        "transport": {},
    };

    return (
        {
            "coins": coins,
            "wins": wins,
            "losses": losses,
            "kills": kills,
            "deaths": deaths,
        }
    )
};