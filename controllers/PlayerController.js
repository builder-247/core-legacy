const Player = require("../models/Player");
const util = require("../util/Utility");
const APIBuilder = require("../lib/APIBuilder");
const Hypixel = require("../HypixelAPIManager");

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

    // Name can be either username or dashed UUID.
    findPlayer: function (name, callback) {

        // Check cache here

        util.validatePlayer(name, isValid);

        function isValid (err, uuid) {
            if (err) {
                callback(err, null);
                return
            }

            Hypixel("player", "&uuid=" + uuid, function(error, data) {
               if (error) {

               }
               APIBuilder(data, uuid, null, sendStats);

                function sendStats(error, response) {
                    callback(null, JSON.parse(response));
                }
            });

            /*Player.findOne({uuid: uuid}, function(err, player) {
                if (err) {
                    callback(err, null);
                    return
                }
                callback(null, player)
            })*/
        }
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
                callback(err, null);
                return
            }

            callback(null, null)
        })
    }

};