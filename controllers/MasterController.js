const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const cache = require("../store/cache");
const validate = require("../svc/validator");

function getId(type, id, callback) {
    console.log(type);
    if (type === "player"
        || type === "session"
        || type === "friends"
        || type === "findguild"
    ) {
        console.log(type);
        validate.validatePlayer(id, (err, id) => {
            if (err) {
                return callback(err, null)
            }
            return callback(null, id)
        });
    } else {
        callback(null, id)
    }
}

module.exports = (type, _id, info, query, cb) => {
    getId(type, _id, (err, id) => {
        if (err) {
            return cb(err, null)
        }
        cache.getFromCache({
            id: id,
            type: type,
            query: query
        }, processCache);

        function processCache(err, cache) {
            if (err) {
                console.log(err)
            }
            if (cache) {
                return cb(null, cache)
            }
        }

        const url = util.generateJob(type, {
            id: id
        }).url;
        util.getData(url, (err, body) => {
            if (err) {
                console.log(err);
                return cb(err, null)
            }
            APIBuilder(body, id, type, sendStats);
            function sendStats(err, stats) {
                if (err) {
                    console.log(err);
                    return cb(err, null)
                }
                cb(null, stats)
            }
        })
    });
};