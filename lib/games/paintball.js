const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const paintball = data.player.stats.Paintball || {};

    const coins = (paintball.coins || 0);
    const wins = (paintball.wins || 0);
    const kills = (paintball.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};