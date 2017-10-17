const util = require("../../util/utility");

const arena = {};

module.exports = function (data, uuid) {

    const arena = data.player.stats.Arena || {};

    const coins = (arena.coins || 0);
    const keys = (arena.keys || 0);

    const gamemodes = {
        "1v1": {
            "kills": (arena.kills_1v1 || 0),
            "deaths": (arena.deaths_1v1 || 0),
            "wins": (arena.wins_1v1 || 0),
            "losses": (arena.losses_1v1 || 0),
            "k_d": util.getRatio((arena.kills_1v1 || 0), (arena.deaths_1v1 || 0)),
            "w_l": util.getRatio((arena.wins_1v1 || 0), (arena.losses_1v1 || 0)),
            "damage": (arena.damage_1v1 || 0),
            "healing": (arena.healed_1v1 || 0)
        },
        "2v2": {
            "kills": (arena.kills_2v2 || 0),
            "deaths": (arena.deaths_2v2 || 0),
            "wins": (arena.wins_2v2 || 0),
            "losses": (arena.losses_2v2 || 0),
            "k_d": util.getRatio((arena.kills_2v2 || 0), (arena.deaths_2v2 || 0)),
            "w_l": util.getRatio((arena.wins_2v2 || 0), (arena.losses_2v2 || 0)),
            "damage": (arena.damage_2v2 || 0),
            "healing": (arena.healed_2v2 || 0)
        },
        "4v4": {
            "kills": (arena.kills_4v4 || 0),
            "deaths": (arena.deaths_4v4 || 0),
            "wins": (arena.wins_4v4 || 0),
            "losses": (arena.losses_4v4 || 0),
            "k_d": util.getRatio((arena.kills_4v4 || 0), (arena.deaths_4v4 || 0)),
            "w_l": util.getRatio((arena.wins_4v4 || 0), (arena.losses_4v4 || 0)),
            "damage": (arena.damage_4v4 || 0),
            "healing": (arena.healed_4v4 || 0)
        }
    };

    let wins = 0;
    let losses = 0;
    let kills = 0;
    let deaths = 0;
    let healing = 0;
    let damage = 0;


    for (let key in gamemodes) {
        if (gamemodes.hasOwnProperty(key)) {
            wins += gamemodes[key].wins;
            losses += gamemodes[key].losses;
            kills += gamemodes[key].kills;
            deaths += gamemodes[key].deaths;
            healing += gamemodes[key].healing;
            damage += gamemodes[key].damage;
        }
    }

    const k_d = util.getRatio(kills, deaths);
    const w_l = util.getRatio(wins, losses);

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

            "wins": wins,
            "losses": losses,
            "kills": kills,
            "deaths": deaths,
            "k_d": k_d,
            "w_l": w_l,
            "damage": damage,
            "healing": healing,

            "gamemodes": gamemodes,

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