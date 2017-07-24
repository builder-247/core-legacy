const warlords = require("./games/warlords");
const arena = require("./games/arena");
const pet = require("./general/pets");
const general = require("./general/general");
const achievements = require("./general/achievements");

const guild = require("./guild/guild");

const Mojang = require("../MojangAPIManager");

module.exports = function (data, uuid, resource) {

    if (resource) {

    }



    console.log(achievements.getAchievementPoints(data.player.achievementsOneTime, data.player.achievements));
};

const player = {
        uuid: "ef962ec2df6e48a2ac9d6062c1b84652",
        username: "builder_247",
        first_login: 1234567890,

        stats: {
            Arena: {
                coins: 12
            }
        }

    };