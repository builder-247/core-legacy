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

/* THIS IS FOR DEMONSTRATIVE PURPOSES ONLY */

Hypixel("guild", "&id=5687d71c0cf245173363d973", function callback(error, data) {
    let response;
    const resource = "guild";
    const uuid = "ef962ec2df6e48a2ac9d6062c1b84652";

    if (resource && resource !== "general") {
        response = resources[resource](data, uuid);
    } else {
        for (let key in resources) {
            if (resources.hasOwnProperty(key) && key !== "guild") {
                //response += JSON.stringify(resources[key](data, uuid));
                resources[key](data, uuid, update_response);

                function update_response(data) {
                    response += JSON.stringify(data);
                }
            }
        }
        response = response.replace("}{", "},{");
    }
    console.log(response);
});

/*======================================== */

module.exports = function (data, uuid, resource, callback) {

    let response;

    if (resource && resource !== "general") {
        response = resources[resource](data, uuid);
    } else {
        for (let key in resources) {
            if (resources.hasOwnProperty(key) && key !== "guild") {
                //response += JSON.stringify(resources[key](data, uuid));
                resources[key](data, uuid, update_response);

                function update_response(data) {
                    response += JSON.stringify(data);
                }
            }
        }
        response = response.replace("}{", "},{");
        console.log(response);
    }

    callback(null, response);
};