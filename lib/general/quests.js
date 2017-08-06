const achievements = require("../../util/Achievements.json");

module.exports = function (data, uuid) {

    //TODO: In-depth quest data

    const quests = data.player.quests;
    let quests_completed = 0;

    for (let key in quests) {
        if (quests.hasOwnProperty(key) && quests[key].hasOwnProperty("completions")) {
            console.log(key + " : " + quests[key].completions.length);
            quests_completed += quests[key].completions.length;

        }
    }

    return (
        {
            "quests_completed": quests_completed
        }
    )

};