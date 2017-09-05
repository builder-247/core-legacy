const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const mw = data.player.stats.Walls3 || {};

    const coins = (mw.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};