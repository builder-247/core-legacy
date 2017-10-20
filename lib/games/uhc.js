const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const uhc = stats.UHC || {};

    const coins = (uhc.coins || 0);
    const wins = (uhc.wins || 0);
    const kills = (uhc.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};