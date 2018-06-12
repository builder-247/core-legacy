const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const cache = require("../store/cache");
const validate = require("../svc/validator");
const populate = require("../svc/populate");

function getId(type, id, callback) {
    if (type === "player"
        || type === "session"
        || type === "friends"
        || type === "findguild"
    ) {
        if (id === null) {
            callback("Please specify a player!", null)
        }
        validate.validatePlayer(id, (err, id) => {
            if (err) {
                return callback(err, null)
            }
            callback(null, id)
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
        function processCache(err, cached_data) {
            if (err) {
                console.log(err)
            }
            if (cached_data) {
                return cb(null, cached_data)
            }
            console.log("Generating a job %s", type);
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
                    cache.writeToCache({
                        id: id,
                        type: type,
                        data: stats
                    }, (success) => {
                        if (type === "player") {
                            populate.populateLeaderboardPlayer(stats, (err, lb) => {

                            })
                        }
                        if (err) {
                            console.log(err);
                            return cb(err, null)
                        }
                        return cb(null, stats)
                    });
                }
            })
        }
    });
};