const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const vampirez = data.player.stats.VampireZ || {};

    const coins = (vampirez.coins || 0);
    const wins = (vampirez.human_wins || 0);
    const kills = (vampirez.vampire_kills || 0);


    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};