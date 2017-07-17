const Player = require("../models/Player");

module.exports = {

    find: function (params, callback) {
        Player.find(params, function (err, players) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, players)
        })
    },

    findById: function (id, callback) {
        Player.findById(id, function(err, player) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, player)
        })
    },

    create: function (params, callback) {
        Player.create(params, function(err, player) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, player)
        })
    },

    update: function (id, params, callback) {
        Player.findByIDAndUpdate(id, params, { new: true }, function(err, player) {
            if (err) {
                callback(err, null);
                return
            }

            callback(null, player)
        })
    },

    delete: function (id, callback) {
        Player.findByIdAndRemove(id, function(err) {
            if (err) {
                callback(err, null)
            }

            callback(null, null)
        })
    }

};