const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const skyclash = stats.SkyClash || {};

    const coins = (skyclash.coins || 0);
    const wins = (skyclash.wins || 0);
    const kills = (skyclash.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};