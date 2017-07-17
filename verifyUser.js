const HypixelAPIManager = require("HypixelAPIManager");

function verify(uuid, api_key, callback) {

    HypixelAPIManager(api_key, "", function(error, response) {
        if (error) {
            callback(error, null);
            return
        }

        if (response.record.ownerUuid === uuid) {

        }
    })
}

module.exports = {
    verify
};