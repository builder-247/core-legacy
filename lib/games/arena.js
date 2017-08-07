const util = require("../../util/utility");

const arena = {};

module.exports = function (data, uuid) {

    const arena = data.player.stats.Arena || {};

    const coins = (arena.coins || 0);
    const keys = (arena.keys || 0);

    const deaths_1v1 = (arena.deaths_1v1 || 0);
    const deaths_2v2 = (arena.deaths_2v2 || 0);
    const deaths_4v4 = (arena.deaths_4v4 || 0);

    const kills_1v1 = (arena.kills_1v1 || 0);
    const kills_2v2 = (arena.kills_2v2 || 0);
    const kills_4v4 = (arena.kills_4v4 || 0);

    const wins_1v1 = (arena.wins_1v1 || 0);
    const wins_2v2 = (arena.wins_2v2 || 0);
    const wins_4v4 = (arena.wins_4v4 || 0);

    const losses_1v1 = (arena.losses_1v1 || 0);
    const losses_2v2 = (arena.losses_2v2 || 0);
    const losses_4v4 = (arena.losses_4v4 || 0);

    const healed_1v1 = (arena.healed_1v1 || 0);
    const healed_2v2 = (arena.healed_2v2 || 0);
    const healed_4v4 = (arena.healed_4v4 || 0);

    const damage_1v1 = (arena.damage_1v1 || 0);
    const damage_2v2 = (arena.damage_2v2 || 0);
    const damage_4v4 = (arena.damage_4v4 || 0);

    const k_d_1v1 = util.getRatio(kills_1v1, deaths_1v1);
    const k_d_2v2 = util.getRatio(kills_2v2, deaths_2v2);
    const k_d_4v4 = util.getRatio(kills_4v4, deaths_4v4);

    const w_l_1v1 = util.getRatio(wins_1v1, losses_1v1);
    const w_l_2v2 = util.getRatio(wins_2v2, losses_2v2);
    const w_l_4v4 = util.getRatio(wins_4v4, losses_4v4);

    const wins = wins_1v1 + wins_2v2 + wins_4v4;
    const losses = losses_1v1 + losses_2v2 + losses_4v4;
    const kills = kills_1v1 + kills_2v2 + kills_4v4;
    const deaths = deaths_1v1 + deaths_2v2 + deaths_4v4;
    const k_d = util.getRatio(kills, deaths);
    const w_l = util.getRatio(wins, losses);
    const damage = damage_1v1 + damage_2v2 + damage_4v4;
    const healed = healed_1v1 + healed_2v2 + healed_4v4;

    const keys_used = (arena.magical_chest || 0);
    const coins_spent = (arena.coins_spent || 0);

    const active_rune = (arena.active_rune || null);

    const selected_offensive = (arena.offensive || null);
    const selected_support = (arena.support || null);
    const selected_utility = (arena.utility || null);
    const selected_ultimate = (arena.ultimate || null);

    const selected_hat = (arena.hat || null);
    const selected_sword = (arena.selected_sword || null);
    //TODO - Selected armor

    const lvl_damage = (arena.lvl_damage || 0);
    const lvl_health = (arena.lvl_health || 0);
    const lvl_energy = (arena.lvl_energy || 0);
    const lvl_cooldown = (arena.lvl_cooldown || 0);

    const lvl_rune_speed = (arena.rune_level_speed || 0);
    const lvl_rune_slowing = (arena.rune_level_slowing || 0);
    const lvl_rune_energy = (arena.rune_level_energy || 0);
    const lvl_rune_damage = (arena.rune_level_damage || 0);

    return (
        {
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
        }
    );
};