const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const uhc = data.player.stats.UHC || {};

    const coins = (uhc.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};