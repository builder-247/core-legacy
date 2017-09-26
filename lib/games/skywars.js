const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const skywars = data.player.stats.SkyWars || {};

    const coins = (skywars.coins || 0);
    const wins = (skywars.wins || 0);
    const kills = (skywars.kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};