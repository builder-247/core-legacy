const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const walls = data.player.stats.Walls || {};

    const coins = (walls.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};