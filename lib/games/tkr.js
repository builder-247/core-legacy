const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const tkr = stats.GingerBread || {};

    const coins = (tkr.coins || 0);
    const wins = (tkr.wins || 0);


    return (
        {
            "coins": coins,
            "wins": wins
        }
    )
};