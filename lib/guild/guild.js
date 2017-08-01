

function getGuildCoinLimit(level) {
    return(10000 + 1000 * level);
}

function getGuildMemberLimit(level) {
    return(25 + 5 * level);
}

module.exports = function (guild) {

    const guild_coins = guild.coins;
    const guild_coins_total = guild.coinsEver;
    const guild_created = guild.created;
    const guild_tag = (guild.tag || false);

    const guild_coin_limit = getGuildCoinLimit(guild.bankSizeLevel);
    const guild_member_limit = getGuildMemberLimit(guild.memberSizeLevel);

    const guild_party = (guild.canParty || false);
    const guild_motd = (guild.canMotd || false);

    const guild_members = [];
    for (i = 0; i < guild.members.length; i++) {
        let member_coins = 0;
        for (j = 0; j < Object.keys(guild.members[i]).length; j++)
            if (Object.keys(guild.members[i])[j].includes("dailyCoins")) {
                member_coins += guild.members[i][Object.keys(guild.members[i])[j]];
            }
        const member = {
            uuid: guild.members[i].uuid,
            rank: guild.members[i].rank,
            joined: guild.members[i].joined,
            coins: member_coins
        };
        guild_members.push(member);
    }

    const newStats = {
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