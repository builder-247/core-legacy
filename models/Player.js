const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    stats: {type: Object, default: {}},
    uuid: {type: String, default:"5409757b87344c0394b10bf966a2d594"},
    username: {type: String, default:"huntz"},
    created: {type: Date, default: Date.now},

});

module.exports = mongoose.model("PlayerSchema", PlayerSchema);