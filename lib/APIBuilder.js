

module.exports = function (data, uuid, resource, type, callback) {

    let resources;

    if (type !== "undefined") {
        resources = require("./" + [type]);
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