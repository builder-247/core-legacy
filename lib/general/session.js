module.exports = function(data, uuid) {

    const session = data.session;
    let newSession = null;

    if (session !== null) {
        newSession = {
            "server": session.server,
            "game": session.gameType || null,
            "players": session.players
        }
    }

    return (newSession)

};