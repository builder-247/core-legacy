const mongoose = require("mongoose");

const FindGuildSchema = new mongoose.Schema({
    id: {type: String, required: true},
    date: {type: Number, default: Date.now()},
    data: {type: Object, required: true}
});

module.exports = mongoose.model("FindGuildSchema", FindGuildSchema);