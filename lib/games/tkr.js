const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const tkr = data.player.stats.GingerBread || {};

    const coins = (tkr.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};