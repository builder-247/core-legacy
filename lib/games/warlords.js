const utility = require("../../util/utility");

const warlords = {};

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const warlords = stats.Battleground || {};

    const coins = ((warlords.coins) || 0);

    const kills = (warlords.kills || 0);
    const assists = (warlords.assists || 0);
    const a_k = utility.getRatio(assists, kills);
    const deaths = (warlords.deaths || 0);
    const k_d = utility.getRatio(kills, deaths);
    const kda = utility.getRatio(kills + assists, deaths);
    const wins = (warlords.wins || 0);
    const losses = (warlords.losses || 0);
    const w_l = utility.getRatio(wins, losses);

    const repaired_weapons = (warlords.repaired || 0);
    const flags_captured = (warlords.flag_conquer_self || 0);

    const repaired_common = (warlords.repaired_common || 0);
    const repaired_rare = (warlords.repaired_rare || 0);
    const repaired_epic = (warlords.repaired_epic || 0);
    const repaired_legendary = (warlords.repaired_legendary || 0);

    const crafted_rare = (warlords.crafted_rare || 0);
    const crafted_epic = (warlords.crafted_epic || 0);
    const crafted_legendary = (warlords.crafted_legendary || 0);

    const reroll_legendary = (warlords.reroll_legendary || 0);

    const magic_dust = (warlords.magic_dust || 0);
    const void_shards = (warlords.void_shards || 0);
    const salvaged_dust = (warlords.salvaged_dust_reward || 0);
    const salvaged_shards = (warlords.salvaged_shards_reward || 0);

    const afk_warned = (warlords.afk_warned || 0);
    const games_left = (warlords.penalty || 0);

    const mage_level = (warlords.mage_skill1 || 0) + (warlords.mage_skill2 || 0) + (warlords.mage_skill3 || 0) + (warlords.mage_skill4 || 0) + (warlords.mage_skill5 || 0) + (warlords.mage_energy || 0) + (warlords.mage_health || 0) + (warlords.mage_cooldown || 0) + (warlords.mage_critchance || 0) + (warlords.mage_critmultiplier || 0);
    const warrior_level = (warlords.warrior_skill1 || 0) + (warlords.warrior_skill2 || 0) + (warlords.warrior_skill3 || 0) + (warlords.warrior_skill4 || 0) + (warlords.warrior_skill5 || 0) + (warlords.warrior_energy || 0) + (warlords.warrior_health || 0) + (warlords.warrior_cooldown || 0) + (warlords.warrior_critchance || 0) + (warlords.warrior_critmultiplier || 0);
    const paladin_level = (warlords.paladin_skill1 || 0) + (warlords.paladin_skill2 || 0) + (warlords.paladin_skill3 || 0) + (warlords.paladin_skill4 || 0) + (warlords.paladin_skill5 || 0) + (warlords.paladin_energy || 0) + (warlords.paladin_health || 0) + (warlords.paladin_cooldown || 0) + (warlords.paladin_critchance || 0) + (warlords.paladin_critmultiplier || 0);
    const shaman_level = (warlords.shaman_skill1 || 0) + (warlords.shaman_skill2 || 0) + (warlords.shaman_skill3 || 0) + (warlords.shaman_skill4 || 0) + (warlords.shaman_skill5 || 0) + (warlords.shaman_energy || 0) + (warlords.shaman_health || 0) + (warlords.shaman_cooldown || 0) + (warlords.shaman_critchance || 0) + (warlords.shaman_critmultiplier || 0);

    const mage_wins = (warlords.wins_mage || 0);
    const warrior_wins = (warlords.wins_warrior || 0);
    const paladin_wins = (warlords.wins_paladin || 0);
    const shaman_wins = (warlords.wins_shaman || 0);

    const mage_damage = (warlords.damage_mage || 0);
    const warrior_damage = (warlords.damage_warrior || 0);
    const paladin_damage = (warlords.damage_paladin || 0);
    const shaman_damage = (warlords.damage_shaman || 0);

    const mage_prevented = (warlords.damage_prevented_mage || 0);
    const warrior_prevented = (warlords.damage_prevented_warrior || 0);
    const paladin_prevented = (warlords.damage_prevented_paladin || 0);
    const shaman_prevented = (warlords.damage_prevented_shaman || 0);

    const mage_healing = (warlords.heal_mage || 0);
    const warrior_healing = (warlords.heal_warrior || 0);
    const paladin_healing = (warlords.heal_paladin || 0);
    const shaman_healing = (warlords.heal_shaman || 0);

    return (
        {
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
        }
    );
};