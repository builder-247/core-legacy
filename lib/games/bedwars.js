const util = require("../../util/utility");

function getBedwarsLevel(exp) {
    // first few levels are different
    if (exp < 500) {
        return 0;
    } else if (exp < 1500) {
        return 1;
    } else if (exp < 3500) {
        return 2;
    } else if (exp < 5500) {
        return 3;
    } else if (exp < 9000) {
        return 4;
    }

    exp -= 9000;
    return exp / 5000 + 4;
}

module.exports = function (data, uuid) {

    const bedwars = data.player.stats.Bedwars || {};

    const coins = (bedwars.coins || 0);
    const wins = (bedwars.wins_bedwars || 0);
    const kills = (bedwars.kills_bedwars || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "kills": kills
        }
    )
};