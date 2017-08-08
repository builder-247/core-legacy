const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    stats: {type: Object, default: {}},
    uuid: {type: String, default:""},
    username: {type: String, default:""},
    created: {type: Date, default: Date.now},

});

module.exports = mongoose.model("PlayerSchema", PlayerSchema);