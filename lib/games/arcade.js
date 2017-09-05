const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const arcade = data.player.stats.Arcade || {};

    const coins = (arcade.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};