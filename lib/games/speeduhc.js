const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const speeduhc = stats.SpeedUHC || {};

    const coins = (speeduhc.coins || 0);
    const wins = (speeduhc.wins || 0);
    const kills = (speeduhc.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};