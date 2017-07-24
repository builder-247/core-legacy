var request = require("request");
var config = require("./config");
var moment = require("moment");
var colors = require("colors");

// Get UUID from username
function getUUID(username, callback) {

    request("https://api.mojang.com/users/profiles/minecraft/" + username, function (error, response, _body) {

        if (response.statusCode !== 200) {
            console.log("Error getting UUID of player " + username + " : Server responded with code " + response.statusCode);
            callback(response.statusCode, null);
            return
        }

        if (error) {
            console.log("Error getting UUID of player " + username + " : " + error);
            callback(error, null);
            return
        }

        const body = JSON.parse(_body);

        if (body.error) {
            console.log("Error getting UUID of player " + username + " : " + body.error + " : " + body.errorMessage);
            callback(body.error + " : " + body.errorMessage, null);
            return
        }

        callback(null, body.id);

    })

}

// Get name history
function getNameHistory(uuid, callback) {

    request("https://api.mojang.com/user/profiles" + uuid + "/names", function(error, response, _body) {

        if (response.statusCode !== 200) {
            console.log("Error getting name history of player " + uuid + " : Server responded with code " + response.statusCode);
            callback(response.statusCode, null);
            return
        }

        if (error) {
            console.log("Error getting name history of player " + uuid + " : " + error);
            callback(error, null);
            return
        }

        const body = JSON.parse(_body);

        if (body.error) {
            console.log("Error getting name history of player " + uuid + " : " + body.error + " : " + body.errorMessage);
            callback(body.error + " : " + body.errorMessage, null);
            return
        }

        callback(null, body);

    })

}

// Fetch status of Mojang Services
// TODO
function mojangStatus() {

    request("https://status.mojang.com/check", function (error, response, body) {
        process.stdout.write("hello: ".red);
        console.log(moment().format() + ": Mojang Status: " + body);
        if (error) {
            console.log("Error getting Mojang status: " + error)
        } else {
            var newMojangStatus = JSON.parse(body);
            if (mojangStatus) {
                if (newMojangStatus !== mojangStatus) {
                    // update internal api
                }
            } else {
                var mojangStatus = newMojangStatus;
                // update internal api
            }
        }
    });

    setInterval(mojangStatus, config.MOJANG_STATUS_INTERVAL);
}


module.exports = {
    getUUID,
    getNameHistory,
    mojangStatus
};