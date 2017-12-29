const redis = require("./redis");
const config = require("../config");
const Models = require("../models");


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

function writeRedisCache(req, callback) {
    if (config.ENABLE_REDIS_CACHE !== "false") {
        redis.setex(`cache:${req.type}:${req.id}`, 60 * 5 , JSON.stringify(req.data));
    } else {
        callback("REDIS cache not enabled on config", null)
    }
}

function getDBCache(req, callback) {
    if (config.ENABLE_DB_CACHE !== "false") {
        const model = Models[req.type];
        if (model) {
            model.find({ id: 123 }, function (err, cache) {

            })
        } else {
            callback(`No caching for type ${req.type}`, null)
        }


        if (false) {
            if (req.query.maxAge
                && cache.created - Date.now() > req.query.maxAge) {

            }
        }
    } else {
        callback("MongoDB cache not enabled on config", null)
    }
}

function writeDBCache(req, callback) {
    if (config.ENABLE_DB_CACHE !== "false") {
        const model = Models[req.type];

        const item = {
            id: req.id,
            data: req.data,
            date: Date.now()
        };

        model.findOne({ id: req.id },  function(err, entity) {

            if (err) {
                console.log(err)
            }

            if (entity) {
                model.findOneAndUpdate({ id: req.id}, function (err, cache) {
                    if (err) return console.log(err);
                });
            } else {
                const cache = new model(item);
                cache.save(function (err, cache) {
                    if (err) return console.log(err);
                });
            }
        });
        callback()

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
                    if (req.query.hasOwnProperty("cached") || !API) {

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
    },

    writeToCache: (req, callback) => {
        // Store to redis

        writeDBCache(req, function(success) {
            callback(success)
        })
    }

};