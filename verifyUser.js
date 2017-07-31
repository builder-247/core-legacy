const Hypixel = require("HypixelAPIManager");

function verify(uuid, api_key, callback) {

    Hypixel(api_key, "", function(error, response) {
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