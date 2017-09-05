const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const paintball = data.player.stats.Paintball || {};

    const coins = (paintball.coins || 0);

    return (
        {
            "coins": coins
        }
    )
};