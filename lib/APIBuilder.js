/*const warlords = require("./games/warlords");
const arena = require("./games/arena");
const pet = require("./general/pets");
const general = require("./general/general");
const achievements = require("./general/achievements");

const guild = require("./guild/guild");*/

const resources = require("./");

const Mojang = require("../MojangAPIManager");

// Testing
const Hypixel = require("../HypixelAPIManager");

/* ===================================
* Resources:
*
* General: pet, achievements, general
*
* Guild: guild
*
* Games: arena, blitz,
*
* ===================================*/

/* THIS IS FOR DEMONSTRATIVE PURPOSES ONLY*/

Hypixel("player", "&uuid=ef962ec2df6e48a2ac9d6062c1b84652", function callback(error, data) {

    let response;
    for (let key in resources) {
        if (resources.hasOwnProperty(key) && key !== "guild") {
            response += JSON.stringify(resources[key](data, "bar"));
        }
    }
    response = response.replace("}{", "},{");
    console.log(response);
});

/*========================================*/

module.exports = function (data, uuid, resource) {

    let response;

    if (resource && resource !== "general") {
        let response = resources[resource](uuid, data);
    } else {
        for (let key in resources) {
            if (resources.hasOwnProperty(key) && key !== "guild") {
                response += JSON.stringify(resources[key](data, uuid));
            }
        }
        response = response.replace("}{", "},{");
        console.log(response);
    }

    //


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