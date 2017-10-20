const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const arcade = stats.Arcade || {};

    const coins = (arcade.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};