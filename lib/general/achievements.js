const constants = require("hypixelconstants");

// TODO: Create detailed information from quest

module.exports = function (data, uuid) {

    const player = data.player || {};

    const one_time = player.achievementsOneTime || {};
    const tiered = player.achievements || {};
    const achievements = constants.achievements;

    let total_onetime = 0;                                                                                               // Achievement points from one time achievements
    let total_tiered = 0;                                                                                                // Achievement points from tiered achievements

    let completed_onetime = 0;                                                                                           // Total one time achievements completed
    let completed_tiered = 0;                                                                                            // Total tiered achievements completed

    const gameArray = Object.getOwnPropertyNames(achievements.achievements);                                             // Array containing all minigames
    for (i = 0; i < gameArray.length; i++) {                                                                             // Loop through each minigame

        const oneTimeAchievementArray = Object.getOwnPropertyNames(achievements.achievements[gameArray[i]].one_time);    // Array containing all achievement names for minigame i
        for (j = 0; j < oneTimeAchievementArray.length; j++) {                                                           // This for loop gets all one-time achievements

            for (k = 0; k < one_time.length; k++) {

                if (one_time[k] === (gameArray[i] + "_" + oneTimeAchievementArray[j]).toLowerCase()) {
                    total_onetime += achievements.achievements[gameArray[i]].one_time[oneTimeAchievementArray[j]].points;
                    completed_onetime++;
                }
            }
        }

        const tieredAchievementArray = Object.getOwnPropertyNames(achievements.achievements[gameArray[i]].tiered);
        for (j = 0; j < tieredAchievementArray.length; j++) {

            for (let key in tiered) {                                                                                     // This for loop gets all tiered achievements
                if (tiered.hasOwnProperty(key)) {

                    if (key === (gameArray[i] + "_" + tieredAchievementArray[j]).toLowerCase()) {

                        const achievement = achievements.achievements[gameArray[i]].tiered[tieredAchievementArray[j]];
                        for (t = 0; t < achievement.tiers.length; t++) {
                            if (tiered[key] >= achievement.tiers[[t]].amount) {
                                total_tiered += achievement.tiers[[t]].points;
                                completed_tiered++;
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        {
            points_one_time: total_onetime,
            points_tiered: total_tiered,
            points_total: total_onetime + total_tiered,

            completed_onetime: completed_onetime,
            completed_tiered: completed_tiered
        }
    )

};