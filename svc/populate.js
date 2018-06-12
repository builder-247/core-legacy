const models = require("../models");

function populateLeaderboardPlayer(stats, cb) {
    const model = models["leaderboardplayer"];
    let leaderboardplayer = {
        uuid: stats.general.uuid
    };

    for (let game in stats) {
        for (let stat in stats[game]) {
            if (model.schema.paths.hasOwnProperty([`${game}_${stat}`])) {
                leaderboardplayer[`${game}_${stat}`] = stats[game][stat];
            }
        }
    }
    console.log(leaderboardplayer);
    cb(null, leaderboardplayer)
}
function populateLeaderboardGuild(stats, cb) {

}
module.exports = {
    populateLeaderboardPlayer,
    populateLeaderboardGuild
};