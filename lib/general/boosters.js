const constants = require("hypixelconstants");

module.exports = function (data, uuid) {

    const boosters = data.boosters || [];
    const game_types = constants.game_types;

    let newBoosters = {
        blitz: [],
        tnt: [],
        mw: [],
        arcade: [],
        uhc: [],
        cvc: [],
        warlords: [],
        smash: [],
        skywars: [],
        cw: [],
        speeduhc: [],
        skyclash: [],
        classic: []
    };

    boosters.forEach(function (booster) {
        for (let key in game_types) {
            let game = null;
            // Match game name from database ID
            if (game_types.hasOwnProperty(key) && key == booster.gameType) {
                game = game_types[key];
            }
            if (game !== null) {
                newBoosters[game].push({
                    uuid: booster.purchaserUuid,
                    multiplier: booster.amount,
                    activated: booster.dateActivated,
                    original_length: booster.originalLength,
                    length: booster.length,
                    active: (booster.length < booster.originalLength),
                    stacked: booster.stacked
                })
            }
        }
    });

    return (newBoosters)
};