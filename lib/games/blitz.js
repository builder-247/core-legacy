const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const blitz = data.player.stats.HungerGames || {};

    const coins = (blitz.coins || 0);

    const kills = (blitz.kills || 0);
    const deaths = (blitz.deaths || 0);
    const wins = (blitz.wins || 0);
    //const wins_solo = (blitz. || 0);

    return (
        {}
    )

};
