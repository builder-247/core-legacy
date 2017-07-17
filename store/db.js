const mongoose = require('mongoose');
const config = require("../config");

const db =
    mongoose.connect(config.DB_URL, { useMongoClient: true }, function (err, res) {
    if (err) {
        console.log("DB CONNECTION FAILED: " + config.DB_URL)
    } else {
        console.log("DB CONNECTED: " + config.DB_URL)
    }
});

module.exports = db;


