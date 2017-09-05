const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const skyclash = data.player.stats.SkyClash || {};

    const coins = (skyclash.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};