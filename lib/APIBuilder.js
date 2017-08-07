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

Hypixel("player", "&uuid=ef962ec2df6e48a2ac9d6062c1b84652", function callback(error, data) {
    let response = "{";
    const uuid = "ef962ec2df6e48a2ac9d6062c1b84652";
    //const resource = "quests";

    /**
     * @return {string}
     */
    function JSONify(resource) {
        return ('"' + resource + '": ');
    }

    if (typeof resource !== "undefined" && resource !== "general") {
        response += JSONify(resource) + JSON.stringify(resources[resource](data, uuid));         // Loads the script to get stats for the wanted resource
    } else {
        for (let key in resources) {                                                             // Goes through each resource and adds the data to the response.
            if (resources.hasOwnProperty(key) && key !== "guild") {
                response += JSONify(key) + JSON.stringify(resources[key](data, uuid));
                if (key !== "warlords") {                                                        // This needs to be the last game in the index file
                    response += ",";
                }
            }
        }
        response = response.replace('}"', '},"');
    }
    response = response.concat("}");
    console.log(response);
});

/*======================================== */



















module.exports = function (data, uuid, resource, callback) {

    let response = "{";

    /**
     * @return {string}
     */
    function JSONify(resource) {
        return ('"' + resource + '": ');
    }

    if (typeof resource !== "undefined" && resource !== null && resource !== "general") {
        response += JSONify(resource) + JSON.stringify(resources[resource](data, uuid));         // Loads the script to get stats for the wanted resource
    } else {
        for (let key in resources) {                                                             // Goes through each resource and adds the data to the response.
            if (resources.hasOwnProperty(key) && key !== "guild") {
                response += JSONify(key) + JSON.stringify(resources[key](data, uuid));
                if (key !== "warlords") {                                                        // This needs to be the last game in the index file
                    response += ",";
                }
            }
        }
        response = response.replace('}"', '},"');
    }
    response = response.concat("}");

    callback(null, response);
};