

module.exports = function (data, uuid, resource, type, callback) {

    let resources;

    if (type !== "undefined") {
        try {
            resources = require("./" + [type]);
        } catch(err) {
            throw(err);
            callback("Invalid endpoint " + type, null)
        }
    }

    let response = {};

    for (let key in resources) {                                                             // Goes through each resource and adds the data to the response.
        if (resources.hasOwnProperty(key)) {
            if (key !== "general") {
                response[key] = resources[key](data, uuid);
            } else {
                response[key] = resources[key](data, response, uuid)
            }
        }
    }

    callback(null, response);
};