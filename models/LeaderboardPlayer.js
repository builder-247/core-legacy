const mongoose = require("mongoose");

const LeaderboardPlayerSchema = new mongoose.Schema({
    uuid: {type: String, required: true},
    general_username: {type: String, required: true},
    general_rank: {type: String, required: true},
    general_level: {type: Number, default: 0},
    general_karma: {type: Number, default: 0},
    general_total_coins: {type: Number, default: 0},
    general_total_kills: {type: Number, default: 0},
    general_total_wins: {type: Number, default: 0},
    general_reward_streak: {type: Number, default: 0},
    general_reward_best: {type: Number, default: 0},
    general_reward_tokens: {type: Number, default: 0},
    general_gifts_sent: {type: Number, default: 0},
    general_gifts_received: {type: Number, default: 0},
    achievements_points_total: {type: Number, default: 0},
    quests_quests_completed: {type: Number, default: 0},
    pets_total_xp: {type: Number, default: 0},
    pets_total_level: {type: Number, default: 0},
    pets_avg_level: {type: Number, default: 0},

});

module.exports = mongoose.model("LeaderboardPlayerSchema", LeaderboardPlayerSchema);