const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const cw = data.player.stats.TrueCombat || {};

    const coins = (cw.coins || 0);
    const wins = (cw.wins || 0);
    const kills = (cw.kills || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};