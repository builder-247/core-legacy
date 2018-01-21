const util = require("../util/Utility");

function getUUID(username, cb) {
    const url = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    return util.getData(url, (err, _uuid) => {
        const uuid = JSON.parse(_uuid);
        if (err) {
            return cb(err, null);
        }
        cb(null, uuid)
    })
}

module.exports = {
    getUUID
};