module.exports = function (data, uuid) {

    const friends = data.records || [];
    const newFriends = [];

    friends.forEach(function (friend) {
        newFriends.push({
            "uuid": (friend.uuidSender !== uuid) ? friend.uuidSender : friend.uuidReceiver,
            "sent_by": friend.uuidSender,
            "started": friend.started
        })
    });

    return (newFriends)

};