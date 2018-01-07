const util = require("../util/Utility");
const retriever = require("./retriever");
const cache = require("../store/cache");

// This function needs to be cleaned up
function validatePlayer(input, cb) {
    cache.getRedisCache({
        type: "uuid",
        id: input,
    }, (err, uuid) => {
        if (!err && uuid !== null) {
            // console.log("[CACHE] Found UUID for username %s : %s", input, uuid);
            return cb(null, uuid);
        } else {
            // Check if input is non dashed uuid.
            if ((/^[0-9a-f]{32}$/i).test(input)) {
                cb(null, util.removeDashes(input));
            }
            // Check if input is uuid, there is an edge condition where input matches the format but isn't a real UUID, only way to verify this is to request
            // the Mojang API. This however adds extra delay and is therefore ignored.
            // From: https://bukkit.org/threads/best-way-to-check-if-a-string-is-a-uuid.258625/
            else if ((/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(input)) {
                cb(null, input);
            } else {
                // Convert from username to UUID
                retriever.getUUID(input, function (error, uuid) {
                    if (error) {
                        cb(error, null);
                        console.log("%s is not a valid username", input);
                        return
                    }

                    // Cache username:uuid for 6 hours
                    cache.writeRedisCache({
                        type: "uuid",
                        id: input,
                        data: uuid.id
                    }, (success) => {
                        cb(null, uuid.id);
                    });
                })
            }
        }
    });
}

module.exports = {
    validatePlayer
};