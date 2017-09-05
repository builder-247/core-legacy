const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const speeduhc = data.player.stats.SpeedUHC || {};

    const coins = (speeduhc.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};