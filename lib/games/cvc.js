const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const cvc = data.player.stats.MCGO || {};

    const coins = (cvc.coins || 0);
    const wins = (cvc.game_wins || 0);
    const kills = (cvc.kills || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};