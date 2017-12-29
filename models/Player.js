const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    id: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    data: {type: Object, default: {}}
});

module.exports = mongoose.model("PlayerSchema", PlayerSchema);