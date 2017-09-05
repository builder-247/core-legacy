const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const cvc = data.player.stats.MCGO || {};

    const coins = (cvc.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};