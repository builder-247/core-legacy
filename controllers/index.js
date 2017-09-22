const UserController = require("./UserController");
const PlayerController = require("./PlayerController");
const BoosterController = require("./BoosterController");
const GuildController = require("./GuildController");
const FriendController = require("./FriendController");
const SessionController = require("./SessionController");

module.exports = {
    user: UserController,
    player: PlayerController,
    boosters: BoosterController,
    guild: GuildController,
    friends: FriendController,
    session: SessionController
};