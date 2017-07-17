const achievements = require("../../util/Achievements.json");

function getAchievementPoints(one_time, tiered) {

    let total_onetime = 0;
    let total_tiered = 0;

    const gameArray = Object.getOwnPropertyNames(achievements.achievements);                                             // Array containing all minigames
    for (i = 0; i < gameArray.length; i++) {                                                                             // Loop through each minigame

        const oneTimeAchievementArray = Object.getOwnPropertyNames(achievements.achievements[gameArray[i]].one_time);    // Array containing all achievement names for minigame i
        for (j = 0; j < oneTimeAchievementArray.length; j++) {                                                           // This for loop gets all one-time achievements

            for (k = 0; k < one_time.length; k++) {

                if (one_time[k] === (gameArray[i] + "_" + oneTimeAchievementArray[j]).toLowerCase()) {
                    total_onetime += achievements.achievements[gameArray[i]].one_time[oneTimeAchievementArray[j]].points;
                }
            }
        }

        const tieredAchievementArray = Object.getOwnPropertyNames(achievements.achievements[gameArray[i]].tiered);
        for (j = 0; j < tieredAchievementArray.length; j++) {

            for (var key in tiered) {                                                                                     // This for loop gets all tiered achievements
                if (tiered.hasOwnProperty(key)) {

                    if (key === (gameArray[i] + "_" + tieredAchievementArray[j]).toLowerCase()) {

                        const achievement = achievements.achievements[gameArray[i]].tiered[tieredAchievementArray[j]];
                        for (t = 0; t < achievement.tiers.length; t++) {
                            if (tiered[key] >= achievement.tiers[[t]].amount) {
                                total_tiered += achievement.tiers[[t]].points;
                                //console.log(key + ": " + tiered[key] + "/" + achievement.tiers[[t]].amount)
                            }
                        }
                    }
                }
            }
        }
    }

    console.log("One time: " + total_onetime);
    console.log("Tiered: " + total_tiered);
    console.log("Total: " + (total_tiered + total_onetime));

}

module.exports = {

    getAchievementPoints

};