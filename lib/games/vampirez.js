const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const vampirez = data.player.stats.VampireZ || {};

    const coins = (vampirez.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};