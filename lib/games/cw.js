const util = require("../../util/utility");

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const cw = stats.TrueCombat || {};

    const coins = (cw.coins || 0);
    const wins = (cw.wins || 0);
    const losses = (cw.losses || 0);
    const kills = (cw.kills || 0);
    const deaths = (cw.deaths || 0);
    const w_l = util.getRatio(wins, losses);
    const k_d = util.getRatio(kills, deaths);

    const win_streak = (cw.win_streak || 0);

    const survived_players = (cw.survived_players || 0);
    const items_enchanted = (cw.items_enchanted || 0);
    const arrows_shot = (cw.arrows_shot || 0);
    const arrows_hit = (cw.arrows_hit || 0);
    const arrow_accuracy = util.getRatio(arrows_shot, arrows_hit);

    const golden_skulls = (cw.golden_skulls || 0);
    const golden_skulls_fed = (cw.giant_zombie || 0);
    const gold_dust = (cw.gold_dust || 0);

    const gamemodes = {
        "solo_normal": {
            "kills": (cw.crazywalls_kills_solo || 0),
            "deaths": (cw.crazywalls_deaths_solo || 0),
            "wins": (cw.crazywalls_wins_solo || 0),
            "losses": (cw.crazywalls_losses_solo || 0),
            "k_d": util.getRatio((cw.crazywalls_kills_solo || 0), (cw.crazywalls_deaths_solo || 0)),
            "w_l": util.getRatio((cw.crazywalls_wins_solo || 0), (cw.crazywalls_losses_solo || 0))
        },
        "solo_lucky": {
            "kills": (cw.crazywalls_kills_solo_chaos || 0),
            "deaths": (cw.crazywalls_deaths_solo_chaos || 0),
            "wins": (cw.crazywalls_wins_solo_chaos || 0),
            "losses": (cw.crazywalls_losses_solo_chaos || 0),
            "k_d": util.getRatio((cw.crazywalls_kills_solo_chaos || 0), (cw.crazywalls_deaths_solo_chaos || 0)),
            "w_l": util.getRatio((cw.crazywalls_wins_solo_chaos || 0), (cw.crazywalls_losses_solo_chaos || 0))
        },
        "team_normal": {
            "kills": (cw.crazywalls_kills_team || 0),
            "deaths": (cw.crazywalls_deaths_team || 0),
            "wins": (cw.crazywalls_wins_team || 0),
            "losses": (cw.crazywalls_losses_team || 0),
            "k_d": util.getRatio((cw.crazywalls_kills_team || 0), (cw.crazywalls_deaths_team || 0)),
            "w_l": util.getRatio((cw.crazywalls_wins_team || 0), (cw.crazywalls_losses_team || 0))},
        "team_lucky": {
            "kills": (cw.crazywalls_kills_team_chaos || 0),
            "deaths": (cw.crazywalls_deaths_team_chaos || 0),
            "wins": (cw.crazywalls_wins_team_chaos || 0),
            "losses": (cw.crazywalls_losses_team_chaos || 0),
            "k_d": util.getRatio((cw.crazywalls_kills_team_chaos || 0), (cw.crazywalls_deaths_team_chaos || 0)),
            "w_l": util.getRatio((cw.crazywalls_wins_team_chaos || 0), (cw.crazywalls_losses_team_chaos || 0))}
    };

    const giant_zombie = {
        "commons": (cw.giant_zombie || 0),
        "rares": (cw.giant_zombie_rares || 0),
        "legendaries": (cw.giant_zombie_legendaries || 0)
    };

    return (
        {
            "coins": coins,
            "wins": wins,
            "losses": losses,
            "kills": kills,
            "deaths": deaths,
            "w_l": w_l,
            "k_d": k_d,
            "win_streak": win_streak,
            "survived_players": survived_players,
            "items_enchanted": items_enchanted,
            "arrows_shot": arrows_shot,
            "arrows_hit": arrows_hit,
            "arrow_accuracy": arrow_accuracy,
            "golden_skulls": golden_skulls,
            "golden_skulls_fed": golden_skulls_fed,
            "gold_dust": gold_dust,
            "gamemodes": gamemodes,
            "giant_zombie": giant_zombie
        }
    )
};