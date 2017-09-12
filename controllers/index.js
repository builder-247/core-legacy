const UserController = require("./UserController");
const PlayerController = require("./PlayerController");
const BoosterController = require("./BoosterController");
const GuildController = require("./GuildController");

module.exports = {
    user: UserController,
    player: PlayerController,
    boosters: BoosterController,
    guild: GuildController
};