const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const walls = data.player.stats.Walls || {};

    const coins = (walls.coins || 0);
    const wins = (walls.wins || 0);
    const kills = (walls.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};