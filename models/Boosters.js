const mongoose = require("mongoose");

const BoosterSchema = new mongoose.Schema({
    date: {type: Number, default: Date.now()},
    data: {type: Object, required: true}
});

module.exports = mongoose.model("BoosterSchema", BoosterSchema);