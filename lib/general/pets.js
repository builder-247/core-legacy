const utility = require("../../util/utility");
const pets = {};

function getLevel(xp) {
    if (xp < 200) {
        return [1, 200];
    } else {

    }
}

module.exports = function (pets) {

    let true_pets, level, total_level, total_xp = 0;

    let newPets = [];
    const petArray = Object.getOwnPropertyNames(pets);

    for (i = 0; i < petArray.length; i++) {
        const xp = (pets[petArray[i]].experience || false);
        // Gotta do this because of companions
        if (xp) {
            true_pets++
        }

        const level_info = getLevel(xp);
        const level = level_info[0];
        const xp_for_next = level_info[1];

        total_level += level;
        total_xp += xp;

        let name = ((pets[petArray[i]].name || null));
        if (name) {
            let name = utility.hypixelFormattingIsWeird(name);
        }
        /*const pet = petArray[i]:{
         xp: xp,
         name: name
         };*/
        newPets.push()
    }

    const avg_level = utility.getRatio(total_level, true_pets);
    console.log(avg_level);

    const newStats = {
        "total_level": total_level,
        "total_xp": total_xp,
        "avg_level": avg_level,

        "pets": newPets
    };

    return(newStats);

};
/**
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