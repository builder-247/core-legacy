const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const skywars = data.player.stats.SkyWars || {};

    const coins = (skywars.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};