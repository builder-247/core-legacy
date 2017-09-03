const resources = require("./");
//const controllers = require("../controllers");

module.exports = function (data, uuid, resource, callback) {

    let response = {};

    for (let key in resources) {                                                             // Goes through each resource and adds the data to the response.
        if (resources.hasOwnProperty(key) && key !== "guild") {
            response[key] = resources[key](data, uuid);
        }
    }

    callback(null, response);
};