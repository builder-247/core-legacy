const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
    id: {type: String, required: true},
    date: {type: Number, default: Date.now()},
    data: {type: Object, required: true}
});

module.exports = mongoose.model("FriendSchema", FriendSchema);