// General
const Achievements = require("./general/achievements");
const Pets = require("./general/pets");

// Games
const Arena = require("./games/arena");
const Blitz = require("./games/blitz");
const Smash = require("./games/smash");
const TNT = require("./games/tnt");
const Warlords = require("./games/warlords");

// Guild
const Guild = require("./guild/guild");

module.exports = {
    achievements: Achievements,
    pets: Pets,

    arena: Arena,
    blitz: Blitz,
    smash: Smash,
    tnt: TNT,
    warlords: Warlords,

    guild: Guild

};