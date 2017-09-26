const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const mm = data.player.stats.MurderMystery || {};

    const coins = (mm.coins || 0);
    const wins = (mm.wins || 0);
    const kills = (mm.kills || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};