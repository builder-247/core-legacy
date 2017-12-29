const mongoose = require("mongoose");

const LeaderboardPlayerSchema = new mongoose.Schema({
    uuid: {type: String, default: ""},
});

module.exports = mongoose.model("LeaderboardPlayerSchema", LeaderboardPlayerSchema);