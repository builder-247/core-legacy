const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const quake = stats.Quake || {};

    const coins = (quake.coins || 0);
    const wins = (quake.wins || 0);
    const kills = (quake.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};