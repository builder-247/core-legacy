var utility = require("../../util/utility");

var tnt = {};

module.exports = function (tnt) {

    var coins = (tnt.coins || 0);

    var run_wins = (tnt.wins_tntrun || 0);
    var run_record = (tnt.record_tntrun || 0);
    var run_potions_splashed = (tnt.run_potions_splashed_on_players || 0);
    var run_deaths = (tnt.deaths_tntrun || 0);

    var pvp_wins = (tnt.wins_pvprun || 0);
    var pvp_kills = (tnt.kills_pvprun || 0);
    var pvp_record = (tnt.record_pvprun || 0);
    var pvp_potions_splashed = (tnt.pvprun_potions_splashed_on_players || 0);
    var pvp_deaths = (tnt.deaths_pvprun || 0);

    var tag_wins = (tnt.wins_tntag || 0);

    var spleef_wins = (tnt.wins_bowspleef || 0);
    var spleef_losses = (tnt.deaths_bowspleef || 0);
    var spleef_w_l = utility.getRatio(spleef_wins, spleef_losses);

    var wizards_kills = (tnt.kills_capture || 0);
    var wizards_deaths = (tnt.deaths_capture || 0);
    var wizards_assists = (tnt.assists_capture || 0);
    var wizards_wins = (tnt.wins_capture || 0);
    var wizards_k_d = utility.getRatio(wizards_kills, wizards_deaths);

    var selected_hat = (tnt.new_selected_hat || tnt.selected_hat || null);
    var death_effect = (tnt.new_active_death_effect || null);
    var particle_effect = (tnt.new_selected_hat || null);

    var newStats = {

        "coins": coins,

        "run_wins": run_wins,
        "run_record": run_record,
        "run_potions_spalshed": run_potions_splashed,
        "run_deaths": run_deaths,

        "pvp_wins": pvp_wins,
        "pvp_kills": pvp_kills,
        "pvp_record": pvp_record,
        "pvp_potions_spalshed": pvp_potions_splashed,
        "pvp_deaths": pvp_deaths,

        "tag_wins": tag_wins,

        "spleef_wins": spleef_wins,
        "spleef_losses": spleef_losses,
        "spleef_w_l": spleef_w_l,

        "wizards_kills": wizards_kills,
        "wizards_deaths": wizards_deaths,
        "wizards_assists": wizards_assists,
        "wizards_wins": wizards_wins,
        "wizards_k_d": wizards_k_d,


    };
    return (newStats);
};