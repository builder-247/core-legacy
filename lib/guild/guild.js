const util = require("../../util/Utility");

function getGuildCoinLimit(level) {
    return (10000 + 1000 * level);
}

function getGuildMemberLimit(level) {
    return (25 + 5 * level);
}

module.exports = function (data, _id) {

    const guild = data.guild || {};

    const name = guild.name;
    const id = guild._id;

    const coins = guild.coins;
    const coins_total = guild.coinsEver;
    const created = guild.created;
    const tag = (guild.tag || false);
    const tag_color = (util.colorNameToCode(guild.tagColor || "GRAY"));

    const coin_limit = getGuildCoinLimit(guild.bankSizeLevel);
    const member_limit = getGuildMemberLimit(guild.memberSizeLevel);

    const party = (guild.canParty || false);
    const motd = (guild.canMotd || false);

    const joinable = (guild.joinable || false);

    const members = [];
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
        members.push(member);
    }

    let daily_coins = [];
    for (let key in guild) {
        if (guild.hasOwnProperty(key) && key.includes("dailyCoins")) {
            daily_coins.push(guild[key])
        }
    }

    const coins_daily = daily_coins[daily_coins.length - 1] || 0;

    return (
        {
            "name": name,
            "id": id,
            "coins": coins,
            "coins_total": coins_total,
            "coins_daily": coins_daily,
            "created": created,
            "tag": tag,
            "tag_color": tag_color,

            "coin_limit": coin_limit,
            "member_limit": member_limit,

            "party": party,
            "motd": motd,

            "members": members
        }
    );

};