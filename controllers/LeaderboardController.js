const util = require("../util/Utility");
const cache = require("../store/cache");
const models = require("../models");

function createQuery(params) {
    const query = models[
        params.type === "player"
            ? "leaderboardplayer"
            : "leaderbaordguild"
        ];

    if (params.type === "player") {
        typeof params.sortBy !== "undefined"
            ? query.sort({[params.sortBy]: -1})
            : query.sort({"wins": -1});

    }
    typeof params.count !== "undefined"
        ? query.limit = Number(params.count)
        : query.limit = 100;
    query.select(params.columns);
    return query
}

module.exports = (query, cb) => {
    console.log(query);

    if (!query.hasOwnProperty("type") || !query.hasOwnProperty("columns")) {
        return cb("Missing required parameters", null)
    }

    cache.getFromCache({
        id: query,
        type: "leaderboards",
        query: {}
    }, (err, cache) => {
        if (cache) {
            return cb(null, cache)
        }
        // const columns = query.columns.split(",");
        createQuery(query).exec((err, leaderboard) => {
            if (err) {

            }
        })
    });

    cb(null, null);
};