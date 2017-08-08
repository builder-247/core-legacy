const resources = require("./");
const controllers = require("../controllers");

module.exports = function (data, uuid, resource, callback) {

    let response = "{";

    /**
     * @return {string}
     */
    function JSONify(resource) {
        return ('"' + resource + '": ');
    }

    for (let key in resources) {                                                             // Goes through each resource and adds the data to the response.
        if (resources.hasOwnProperty(key) && key !== "guild") {
            response += JSONify(key) + JSON.stringify(resources[key](data, uuid));
            if (key !== "warlords") {                                                        // This needs to be the last game in the index file
                response += ",";
            }
        }
    }
    response = JSON.parse(response.replace('}"', '},"').concat("}"));                        // First make it a valid JSON object and then parse it ot JS object

    callback(null, response);
};