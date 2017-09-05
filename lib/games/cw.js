const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const arcade = data.player.stats.TrueCombat || {};

    const coins = (arcade.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};