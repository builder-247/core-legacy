const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const mw = stats.Walls3 || {};

    const coins = (mw.coins || 0);
    const wins = (mw.wins || 0);
    const kills = (mw.kills || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};