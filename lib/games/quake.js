const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const quake = data.player.stats.Quake || {};

    const coins = (quake.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};