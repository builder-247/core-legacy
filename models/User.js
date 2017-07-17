const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, default: ""},
    email: {type: String, default: ""},
    password: {type: String, default: ""},
    uuid: {type: String, default: ""},
    isVerified: {type: Boolean, default: false},
    created: {type: Date, default: Date.now},
    hasPlus: {type: Boolean, default: false},
    hasStaff: {type: Boolean, default: false},
    trophies: {type: Array, default: []},
    key: {type: String, default: ""}

});

module.exports = mongoose.model("UserSchema", UserSchema);