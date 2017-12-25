const util = require("../../util/utility");

function getTitle(score)  {
    if (score < 100) {
        return "rookie"
    } else if (score < 250) {
        return "untrained"
    } else if (score < 500) {
        return "amateur"
    } else if (score < 1000) {
        return "apprentice"
    } else if (score < 2000) {
        return "experienced"
    } else if (score < 3500) {
        return "seasoned"
    } else if (score < 5000) {
        return "trained"
    } else if (score < 7500) {
        return "skilled"
    } else if (score < 10000) {
        return "talented"
    } else if (score < 15000) {
        return "professional"
    } else if (score < 20000) {
        return "expert"
    } else {
        return "master"
    }
}

module.exports = function (data, uuid) {

    const stats = data.player.stats || {};
    const bb = stats.BuildBattle || {};

    const coins = (bb.coins || 0);
    const wins = (bb.wins || 0);
    const wins_solo = (bb.wins_solo_normal || 0);
    const wins_teams = (bb.wins_teams_normal || 0);
    const wins_guess_the_build = (bb.wins_guess_the_build || 0);
    const wins_pro = (bb.wins_solo_pro);

    const score = (bb.score || 0);
    const title = getTitle(score);
    const votes = (bb.total_votes || 0);
    const games_played = (bb.games_played || 0);
    const super_votes = (bb.super_votes || 0);
    const correct_guesses = (bb.correct_guesses || 0);

    return (
        {
            "coins": coins,
            "wins": wins,
            "wins_solo": wins_solo,
            "wins_teams": wins_teams,
            "wins_guess_the_build": wins_guess_the_build,
            "wins_pro": wins_pro,
            "score": score,
            "title": title,
            "votes": votes,
            "games_played": games_played,
            "super_votes": super_votes,
            "correct_guesses": correct_guesses
        }
    )
};