const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const blitz = data.player.stats.HungerGames || {};

    const coins = (blitz.coins || 0);

    const kills = (blitz.kills || 0);
    const deaths = (blitz.deaths || 0);
    const k_d = util.getRatio(kills, deaths);
    const wins = (blitz.wins || 0);
    const wins_teams = (blitz.wins_teams || 0);
    const wins_solo = wins - wins_teams;
    const rambo_wins = (blitz.rambo_wins || 0);
    
    //TODO - Kits

    return (
        {
            "coins": coins,
            "kills": kills,
            "deaths": deaths,
            "k_d": k_d,
            "wins": wins,
            "wins_teams": wins_teams,
            "wins_solo": wins_solo,
            "rambo_wins": rambo_wins
        }
    )

};