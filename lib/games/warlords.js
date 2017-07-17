var utility = require("../../util/utility");

var warlords = {};

module.exports = function (warlords) {

    var coins = ((warlords.coins) || 0);

    var kills = (warlords.kills || 0);
    var assists = (warlords.assists || 0);
    var a_k = utility.getRatio(assists, kills);
    var deaths = (warlords.deaths || 0);
    var k_d = utility.getRatio(kills, deaths);
    var kda = utility.getRatio(kills + assists, deaths);
    var wins = (warlords.wins || 0);
    var losses = (warlords.losses || 0);
    var w_l = utility.getRatio(wins, losses);

    var repaired_weapons = (warlords.repaired || 0);
    var flags_captured = (warlords.flag_conquer_self || 0);

    var repaired_common = (warlords.repaired_common || 0);
    var repaired_rare = (warlords.repaired_rare || 0);
    var repaired_epic = (warlords.repaired_epic || 0);
    var repaired_legendary = (warlords.repaired_legendary || 0);

    var crafted_rare = (warlords.crafted_rare || 0);
    var crafted_epic = (warlords.crafted_epic || 0);
    var crafted_legendary = (warlords.crafted_legendary || 0);

    var reroll_legendary = (warlords.reroll_legendary || 0);

    var magic_dust = (warlords.magic_dust || 0);
    var void_shards = (warlords.void_shards || 0);
    var salvaged_dust = (warlords.salvaged_dust_reward || 0);
    var salvaged_shards = (warlords.salvaged_shards_reward || 0);

    var afk_warned = (warlords.afk_warned || 0);
    var games_left = (warlords.penalty || 0);

    var mage_level = (warlords.mage_skill1 || 0) + (warlords.mage_skill2 || 0) + (warlords.mage_skill3 || 0) + (warlords.mage_skill4 || 0) + (warlords.mage_skill5 || 0) + (warlords.mage_energy || 0) + (warlords.mage_health || 0) + (warlords.mage_cooldown || 0) + (warlords.mage_critchance || 0) + (warlords.mage_critmultiplier || 0);
    var warrior_level = (warlords.warrior_skill1 || 0) + (warlords.warrior_skill2 || 0) + (warlords.warrior_skill3 || 0) + (warlords.warrior_skill4 || 0) + (warlords.warrior_skill5 || 0) + (warlords.warrior_energy || 0) + (warlords.warrior_health || 0) + (warlords.warrior_cooldown || 0) + (warlords.warrior_critchance || 0) + (warlords.warrior_critmultiplier || 0);
    var paladin_level = (warlords.paladin_skill1 || 0) + (warlords.paladin_skill2 || 0) + (warlords.paladin_skill3 || 0) + (warlords.paladin_skill4 || 0) + (warlords.paladin_skill5 || 0) + (warlords.paladin_energy || 0) + (warlords.paladin_health || 0) + (warlords.paladin_cooldown || 0) + (warlords.paladin_critchance || 0) + (warlords.paladin_critmultiplier || 0);
    var shaman_level = (warlords.shaman_skill1 || 0) + (warlords.shaman_skill2 || 0) + (warlords.shaman_skill3 || 0) + (warlords.shaman_skill4 || 0) + (warlords.shaman_skill5 || 0) + (warlords.shaman_energy || 0) + (warlords.shaman_health || 0) + (warlords.shaman_cooldown || 0) + (warlords.shaman_critchance || 0) + (warlords.shaman_critmultiplier || 0);

    var mage_wins = (warlords.wins_mage || 0);
    var warrior_wins = (warlords.wins_warrior || 0);
    var paladin_wins = (warlords.wins_paladin || 0);
    var shaman_wins = (warlords.wins_shaman || 0);

    var mage_damage = (warlords.damage_mage || 0);
    var warrior_damage = (warlords.damage_warrior || 0);
    var paladin_damage = (warlords.damage_paladin || 0);
    var shaman_damage = (warlords.damage_shaman || 0);

    var mage_prevented = (warlords.damage_prevented_mage || 0);
    var warrior_prevented = (warlords.damage_prevented_warrior || 0);
    var paladin_prevented = (warlords.damage_prevented_paladin || 0);
    var shaman_prevented = (warlords.damage_prevented_shaman || 0);

    var mage_healing = (warlords.heal_mage || 0);
    var warrior_healing = (warlords.heal_warrior || 0);
    var paladin_healing = (warlords.heal_paladin || 0);
    var shaman_healing = (warlords.heal_shaman || 0);

    newStats = {

        "coins": coins,

        "kills": kills,
        "assists": assists,
        "a_k": a_k,
        "deaths": deaths,
        "k_d": k_d,
        "kda": kda,
        "wins": wins,
        "losses": losses,
        "w_l": w_l,

        "repaired_weapons": repaired_weapons,
        "flags_captured": flags_captured,

        "repaired_common": repaired_common,
        "repaired_rare": repaired_rare,
        "repaired_epic": repaired_epic,
        "repaired_legendary": repaired_legendary,

        "crafted_rare": crafted_rare,
        "crafted_epic": crafted_epic,
        "crafted_legendary": crafted_legendary,

        "reroll_legendary": reroll_legendary,
        "magic_dust": magic_dust,
        "void_shards": void_shards,
        "salvaged_dust": salvaged_dust,
        "salvaged_shards": salvaged_shards,

        "afk_warned": afk_warned,
        "games_left": games_left,

        "mage_level": mage_level,
        "warrior_level": warrior_level,
        "paladin_level": paladin_level,
        "shaman_level": shaman_level,

        "mage_wins": mage_wins,
        "warrior_wins": warrior_wins,
        "paladin_wins": paladin_wins,
        "shaman_wins": shaman_wins,

        "mage_damage": mage_damage,
        "warrior_damage": warrior_damage,
        "paladin_damage": paladin_damage,
        "shaman_damage": shaman_damage,

        "mage_prevented": mage_prevented,
        "warrior_prevented": warrior_prevented,
        "paladin_prevented": paladin_prevented,
        "shaman_prevented": shaman_prevented,

        "mage_healing": mage_healing,
        "warrior_healing": warrior_healing,
        "paladin_healing": paladin_healing,
        "shaman_healing": shaman_healing,


    };
    return (newStats);
};