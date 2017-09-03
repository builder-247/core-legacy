// Companion names
// FROG, HP8, SLOTH, GIFTERINO, PENGUIN, GORRILA, DUCK, BLACK_PUG, TURTLE, WHITE_PUG, SHIBE, CHIMP, PANDA, ELEPHANT, JACK_DOG (magic dog), 
const util = require("../../util/utility");

petLevel = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100
];

petXp = [
    200,
    210,
    230,
    250,
    280,
    310,
    350,
    390,
    450,
    500,
    570,
    640,
    710,
    800,
    880,
    980,
    1080,
    1190,
    1300,
    1420,
    1540,
    1670,
    1810,
    1950,
    2100,
    2260,
    2420,
    2580,
    2760,
    2940,
    3120,
    3310,
    3510,
    3710,
    3920,
    4140,
    4360,
    4590,
    4820,
    5060,
    5310,
    5560,
    5820,
    6090,
    6360,
    6630,
    6920,
    7210,
    7500,
    7800,
    8110,
    8420,
    8740,
    9070,
    9400,
    9740,
    10080,
    10430,
    10780,
    11150,
    11510,
    11890,
    12270,
    12650,
    13050,
    13440,
    13850,
    14260,
    14680,
    15100,
    15530,
    15960,
    16400,
    16850,
    17300,
    17760,
    18230,
    18700,
    19180,
    19660,
    20150,
    20640,
    21150,
    21650,
    22170,
    22690,
    23210,
    23750,
    24280,
    24830,
    25380,
    25930,
    26500,
    27070,
    27640,
    28220,
    28810,
    29400,
    30000
];

function getPetLevel(xp) {
    let testXp = 0;
    let testLevel = 0;

    if (xp < 200) {
        return (1);
    } else {
        for (let i = 0; testXp < xp && testLevel < 100; i++) {
            testLevel = petLevel[petXp.indexOf(petXp[i])];
            testXp += petXp[i]
        }
        return (testLevel)
    }
}

module.exports = function (data, uuid) {

    const pets = data.player.petStats || {};

    let level = 0, total_level = 0, total_xp = 0, xp = 0;
    let name;

    let newPets = [];
    let companions = [];

    for (let key in pets) {
        if (pets.hasOwnProperty(key)) {
            if (pets[key].hasOwnProperty("experience")) {
                xp = pets[key].experience;
                level = getPetLevel(xp);
                name = (typeof pets[key].name !== "undefined") ? pets[key].name : null;

                console.log(key + " : " + xp + ", " + level);
                total_xp += xp;
                total_level += level;

                newPets.push({
                    "type": key,
                    "xp": xp,
                    "level": level,
                    "name": name
                })
            } else {

                name = (typeof pets[key].name !== "undefined") ? pets[key].name : null;

                companions.push({
                    "type": key,
                    "name": name
                })
            }
        }
    }

    const avg_level = util.getRatio(total_level, newPets.length);

    return (
        {
            "total_xp": total_xp,
            "total_level": total_level,
            "avg_level": avg_level,
            "pets": newPets,
            "companions": companions
        }
    );

};

/** From sk1er.club source
 petLevels.put(2, 200);
 petLevels.put(3, 210);
 petLevels.put(4, 230);
 petLevels.put(5, 250);
 petLevels.put(6, 280);
 petLevels.put(7, 310);
 petLevels.put(8, 350);
 petLevels.put(9, 390);
 petLevels.put(10, 450);
 petLevels.put(11, 500);
 petLevels.put(12, 570);
 petLevels.put(13, 640);
 petLevels.put(14, 710);
 petLevels.put(15, 800);
 petLevels.put(16, 880);
 petLevels.put(17, 980);
 petLevels.put(18, 1080);
 petLevels.put(19, 1190);
 petLevels.put(20, 1300);
 petLevels.put(21, 1420);
 petLevels.put(22, 1540);
 petLevels.put(23, 1670);
 petLevels.put(24, 1810);
 petLevels.put(25, 1950);
 petLevels.put(26, 2100);
 petLevels.put(27, 2260);
 petLevels.put(28, 2420);
 petLevels.put(29, 2580);
 petLevels.put(30, 2760);
 petLevels.put(31, 2940);
 petLevels.put(32, 3120);
 petLevels.put(33, 3310);
 petLevels.put(34, 3510);
 petLevels.put(35, 3710);
 petLevels.put(36, 3920);
 petLevels.put(37, 4140);
 petLevels.put(38, 4360);
 petLevels.put(39, 4590);
 petLevels.put(40, 4820);
 petLevels.put(41, 5060);
 petLevels.put(42, 5310);
 petLevels.put(43, 5560);
 petLevels.put(44, 5820);
 petLevels.put(45, 6090);
 petLevels.put(46, 6360);
 petLevels.put(47, 6630);
 petLevels.put(48, 6920);
 petLevels.put(49, 7210);
 petLevels.put(50, 7500);
 petLevels.put(51, 7800);
 petLevels.put(52, 8110);
 petLevels.put(53, 8420);
 petLevels.put(54, 8740);
 petLevels.put(55, 9070);
 petLevels.put(56, 9400);
 petLevels.put(57, 9740);
 petLevels.put(58, 10080);
 petLevels.put(59, 10430);
 petLevels.put(60, 10780);
 petLevels.put(61, 11150);
 petLevels.put(62, 11510);
 petLevels.put(63, 11890);
 petLevels.put(64, 12270);
 petLevels.put(65, 12650);
 petLevels.put(66, 13050);
 petLevels.put(67, 13440);
 petLevels.put(68, 13850);
 petLevels.put(69, 14260);
 petLevels.put(70, 14680);
 petLevels.put(71, 15100);
 petLevels.put(72, 15530);
 petLevels.put(73, 15960);
 petLevels.put(74, 16400);
 petLevels.put(75, 16850);
 petLevels.put(76, 17300);
 petLevels.put(77, 17760);
 petLevels.put(78, 18230);
 petLevels.put(79, 18700);
 petLevels.put(80, 19180);
 petLevels.put(81, 19660);
 petLevels.put(82, 20150);
 petLevels.put(83, 20640);
 petLevels.put(84, 21150);
 petLevels.put(85, 21650);
 petLevels.put(86, 22170);
 petLevels.put(87, 22690);
 petLevels.put(88, 23210);
 petLevels.put(89, 23750);
 petLevels.put(90, 24280);
 petLevels.put(91, 24830);
 petLevels.put(92, 25380);
 petLevels.put(93, 25930);
 petLevels.put(94, 26500);
 petLevels.put(95, 27070);
 petLevels.put(96, 27640);
 petLevels.put(97, 28220);
 petLevels.put(98, 28810);
 petLevels.put(99, 29400);
 petLevels.put(100, 30000);
 **/
