var utility = require("../../util/utility");

var arena = {};

module.exports = function (arena) {

    var coins = (arena.coins || 0);
    var keys = (arena.keys || 0);

    var deaths_1v1 = (arena.deaths_1v1 || 0);
    var deaths_2v2 = (arena.deaths_2v2 || 0);
    var deaths_4v4 = (arena.deaths_4v4 || 0);

    var kills_1v1 = (arena.kills_1v1 || 0);
    var kills_2v2 = (arena.kills_2v2 || 0);
    var kills_4v4 = (arena.kills_4v4 || 0);

    var wins_1v1 = (arena.wins_1v1 || 0);
    var wins_2v2 = (arena.wins_2v2 || 0);
    var wins_4v4 = (arena.wins_4v4 || 0);

    var losses_1v1 = (arena.losses_1v1 || 0);
    var losses_2v2 = (arena.losses_2v2 || 0);
    var losses_4v4 = (arena.losses_4v4 || 0);

    var healed_1v1 = (arena.healed_1v1 || 0);
    var healed_2v2 = (arena.healed_2v2 || 0);
    var healed_4v4 = (arena.healed_4v4 || 0);

    var damage_1v1 = (arena.damage_1v1 || 0);
    var damage_2v2 = (arena.damage_2v2 || 0);
    var damage_4v4 = (arena.damage_4v4 || 0);

    var k_d_1v1 = utility.getRatio(kills_1v1, deaths_1v1);
    var k_d_2v2 = utility.getRatio(kills_2v2, deaths_2v2);
    var k_d_4v4 = utility.getRatio(kills_4v4, deaths_4v4);

    var w_l_1v1 = utility.getRatio(wins_1v1, losses_1v1);
    var w_l_2v2 = utility.getRatio(wins_2v2, losses_2v2);
    var w_l_4v4 = utility.getRatio(wins_4v4, losses_4v4);

    var wins = wins_1v1 + wins_2v2 + wins_4v4;
    var losses = losses_1v1 + losses_2v2 + losses_4v4;
    var kills = kills_1v1 + kills_2v2 + kills_4v4;
    var deaths = deaths_1v1 + deaths_2v2 + deaths_4v4;
    var k_d = utility.getRatio(kills, deaths);
    var w_l = utility.getRatio(wins, losses);
    var damage = damage_1v1 + damage_2v2 + damage_4v4;
    var healed = healed_1v1 + healed_2v2 + healed_4v4;

    var keys_used = (arena.magical_chest || 0);
    var coins_spent = (arena.coins_spent || 0);

    var active_rune = (arena.active_rune || null);

    var selected_offensive = (arena.offensive || null);
    var selected_support = (arena.support || null);
    var selected_utility = (arena.utility || null);
    var selected_ultimate = (arena.ultimate || null);

    var selected_hat = (arena.hat || null);
    var selected_sword = (arena.selected_sword || null);
    //TODO - Selected armor

    var lvl_damage = (arena.lvl_damage || 0);
    var lvl_health = (arena.lvl_health || 0);
    var lvl_energy = (arena.lvl_energy || 0);
    var lvl_cooldown = (arena.lvl_cooldown || 0);

    var lvl_rune_speed = (arena.rune_level_speed || 0);
    var lvl_rune_slowing = (arena.rune_level_slowing || 0);
    var lvl_rune_energy = (arena.rune_level_energy || 0);
    var lvl_rune_damage = (arena.rune_level_damage || 0);

    var newStats = {
        "coins": coins,
        "keys": keys,

        "deaths_1v1": deaths_1v1,
        "deaths_2v2": deaths_2v2,
        "deaths_4v4": deaths_4v4,

        "kills_1v1": kills_1v1,
        "kills_2v2": kills_2v2,
        "kills_4v4": kills_4v4,

        "wins_1v1": wins_1v1,
        "wins_2v2": wins_2v2,
        "wins_4v4": wins_4v4,

        "losses_1v1": losses_1v1,
        "losses_2v2": losses_2v2,
        "losses_4v4": losses_4v4,

        "healed_1v1": healed_1v1,
        "healed_2v2": healed_2v2,
        "healed_4v4": healed_4v4,

        "damage_1v1": damage_1v1,
        "damage_2v2": damage_2v2,
        "damage_4v4": damage_4v4,

        "k_d_1v1": k_d_1v1,
        "k_d_2v2": k_d_2v2,
        "k_d_4v4": k_d_4v4,

        "w_l_1v1": w_l_1v1,
        "w_l_2v2": w_l_2v2,
        "w_l_4v4": w_l_4v4,

        "wins": wins,
        "losses": losses,
        "kills": kills,
        "deaths": deaths,
        "k_d": k_d,
        "w_l": w_l,
        "damage": damage,
        "healed": healed,

        "keys_used": keys_used,
        "coins_spent": coins_spent,

        "active_rune": active_rune,

        "selected_offensive": selected_offensive,
        "selected_support": selected_support,
        "selected_utility": selected_utility,
        "selected_ultimate": selected_ultimate,

        "selected_hat": selected_hat,
        "selected_sword ": selected_sword,

        "lvl_damage": lvl_damage,
        "lvl_health": lvl_health,
        "lvl_energy": lvl_energy,
        "lvl_cooldown": lvl_cooldown,

        "lvl_rune_speed": lvl_rune_speed,
        "lvl_rune_slowing": lvl_rune_slowing,
        "lvl_rune_energy": lvl_rune_energy,
        "lvl_rune_damage": lvl_rune_damage
    };
    return(newStats);
};