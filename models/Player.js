const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    player: {type: Array, default: []},
    created: {type: Date, default: Date.now},

});

module.exports = mongoose.model("PlayerSchema", PlayerSchema);