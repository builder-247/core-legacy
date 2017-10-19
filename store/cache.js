const redis = require("./redis");
const config = require("../config");

function checkAPIStatus(callback) {
    redis.get("API_IS_DOWN", function (err, API_IS_DOWN) {
        if (API_IS_DOWN) {
            callback(false)
        } else {
            callback(true)
        }
    })
}

function getRedisCache(req, callback) {
    if (config.ENABLE_REDIS_CACHE !== "false") {
        redis.get(req, function (err, cache) {
            if (err) {
                callback(err, null);
            } else if (cache) {
                console.log("[REDIS] %s", req);
                callback(null, cache);
            } else {
                callback("Error while fetching redis cache", null)
            }
        })
    } else {
        callback("REDIS cache not enabled on config", null)
    }
}

function getDBCache(req, callback) {
    if (config.ENABLE_DB_CACHE !== "false") {

    } else {
        callback("MongoDB cache not enabled on config", null)
    }
}

module.exports = {
    read: (req, callback) => {

        redis.get("")
    },

    update: (req, callback) => {

    },

    write: (req, callback) => {

        redis.setex(req, 60 * 60 * 12, callback)
    },


    getFromCache: (req, callback) => {
        checkAPIStatus(function (API) {
            getRedisCache(req.name, function (err, cache) {
                if (!err) {
                    callback(null, cache);
                } else {
                    if (req.query.cached || !API) {

                        console.log("DB CACHE");

                        getDBCache(req, function (err, cache) {
                            if (!err) {
                                callback(null, cache)
                            } else {
                                callback(err, null)
                            }
                        })
                    } else {
                        callback("nocache", null)
                    }
                }
            })
        })
    }
};