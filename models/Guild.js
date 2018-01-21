const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
    id: {type: String, required: true},
    date: {type: Number, default: Date.now()},
    data: {type: Object, required: true}
});

module.exports = mongoose.model("GuildSchema", GuildSchema);