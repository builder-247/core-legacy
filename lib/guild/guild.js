

function getGuildCoinLimit(level) {
    return(10000 + 1000 * level);
}

function getGuildMemberLimit(level) {
    return(25 + 5 * level);
}

module.exports = function (guild) {

    var guild_coins = guild.coins;
    var guild_coins_total = guild.coinsEver;
    var guild_created = guild.created;
    var guild_tag = (guild.tag || false);

    var guild_coin_limit = getGuildCoinLimit(guild.bankSizeLevel);
    var guild_member_limit = getGuildMemberLimit(guild.memberSizeLevel);

    var guild_party = (guild.canParty || false);
    var guild_motd = (guild.canMotd || false);

    var guild_members = [];
    for (i = 0; i < guild.members.length; i++) {
        let member_coins = 0;
        for (j = 0; j < Object.keys(guild.members[i]).length; j++)
            if (Object.keys(guild.members[i])[j].includes("dailyCoins")) {
                member_coins += guild.members[i][Object.keys(guild.members[i])[j]];
            }
        var member = {
            uuid: guild.members[i].uuid,
            rank: guild.members[i].rank,
            joined: guild.members[i].joined,
            coins: member_coins
        };
        guild_members.push(member);
    }

    var newStats = {
        "guild_coins": guild_coins,
        "guild_coins_total": guild_coins_total,
        "guild_created": guild_created,
        "guild_tag": guild_tag,

        "guild_coin_limit": guild_coin_limit,
        "guild_member_limit": guild_member_limit,

        "guild_party": guild_party,
        "guild_motd": guild_motd,

        "guild_members": guild_members
    };

    return(newStats);

};