module.exports = function (data, uuid) {

    const boosters = data.boosters || [];

    // See https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/misc/GameType.md
    const gameTypeIds = [
        5,
        6,
        13,
        14,
        20,
        21,
        23,
        24,
        51,
        52,
        54,
        55,
        56
    ];
    const gameTypeNames = [
        "blitz",
        "tnt",
        "mw",
        "arcade",
        "uhc",
        "cvc",
        "warlords",
        "smash",
        "skywars",
        "cw",
        "speeduhc",
        "skyclash",
        "classic"
    ];

    /*let blitz = [];
    let tnt = [];
    let mw = [];
    let arcade = [];
    let uhc = [];
    let cvc = [];
    let warlords = [];
    let smash = [];
    let skywars = [];
    let cw = [];
    let speeduhc = [];
    let skyclash = [];
    let classic = [];*/

    let _boosters: {
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

    for (let i = 0; i < boosters.length; i++) {

        let game = null;

        if (gameTypeIds.indexOf(boosters[i].gameType) !== -1) {
            game = gameTypeNames[gameTypeIds.indexOf(boosters[i].gameType)]       // Get booster's name from database id
        }

        if (game !== null) {
            _boosters[game].push({
                uuid: boosters[i].purchaserUuid,
                multiplier: boosters[i].amount,
                activated: boosters[i].dateActivated,
                original_length: boosters[i].orignalLength,
                length: boosters[i].length
            })
        }
    }

    return (_boosters)
};
