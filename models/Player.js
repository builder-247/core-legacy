const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    player: {type: Object, default: {
        uuid: "ef962ec2df6e48a2ac9d6062c1b84652",
        username: "builder_247",
        first_login: 1234567890,

        stats: {
            Arena: {
                coins: 12
            }
        }}},
    created: {type: Date, default: Date.now},

});

module.exports = mongoose.model("PlayerSchema", PlayerSchema);