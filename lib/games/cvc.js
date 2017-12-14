const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const cvc = stats.MCGO || {};

    const coins = (cvc.coins || 0);
    const headshots = (cvc.headshot_kills || 0);
    const round_wins = (cvc.round_wins || 0);
    const shots_fired = (cvc.shots_fired || 0);
    const bombs_planted = (cvc.bombs_planted || 0);
    const bombs_defused = (cvc.bombs_defused || 0);

    const gamemodes = {
        "defusal": {
            "wins": (cvc.game_wins || 0),
            "kills": (cvc.kills || 0),
            "deaths": (cvc.deaths || 0),
            "k_d": util.getRatio((cvc.kills || 0), (cvc.deaths || 0))
        },
        "deathmatch": {
            "wins": (cvc.game_wins_deathmatch || 0),
            "kills": (cvc.kills_deathmatch || 0),
            "deaths": (cvc.deaths_deathmatch || 0),
            "k_d": util.getRatio((cvc.kills_deathmatch || 0), (cvc.deaths_deathmatch || 0))
        }
    };

    const wins = gamemodes.defusal.wins + gamemodes.deathmatch.wins;
    const kills = gamemodes.defusal.kills + gamemodes.deathmatch.kills;
    const deaths = gamemodes.defusal.deaths + gamemodes.deathmatch.deaths;
    const k_d = util.getRatio(kills, deaths);
    const h_k = util.getRatio(headshots, kills);

    // TODO - Upgrades and maps

    return (
        {
            "coins": coins,
            "wins": wins,
            "round_wins": round_wins,
            "kills": kills,
            "deaths": deaths,
            "k_d": k_d,
            "headshots": headshots,
            "h_k": h_k,
            "shots_fired": shots_fired,
            "bombs_plated": bombs_planted,
            "bombs_defused": bombs_defused,
            "gamemodes": gamemodes
        }
    )
};