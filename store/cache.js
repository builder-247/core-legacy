const redis = require("redis");

module.exports = {
    read: (req, callback) => {

        redis.get("")
    },

    update: (req, callback) => {

    },

    write: (req, callback) => {

        redis.setex(req, 60 * 60 * 12, callback)
    }

};