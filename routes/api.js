const express = require("express");
const api = express.Router();
const controller = require("../controllers/MasterController");
const util = require("../util/Utility");
const allowed_endpoints = [
    "player",
    "boosters",
    "session",
    "friends",
    "guild"
];
// Temporary path used for database testing
const Models = require("../models");
api.get("/devtest", function (req, res, next) {
    let player = Models["player"];

    player.find()
        .then(function (doc) {
            res.json(doc)
        });

    //player.findOneAndRemove({ id: "ef962ec2df6e48a2ac9d6062c1b84652"}).exec();

});

api.get("/guild/:id", (req, res, next) => {
    const id = req.params.id || null;
    const info = req.params.info || null;
    const query = req.query || null;
    controller("findguild", id, info, query, (err, response) => {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else if (response.findguild === null) {
            res.json({
                success: true,
                result: null,
            });
        } else {
            controller("guild", response.findguild, info,  query, (err, response) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        result: response.data || response,
                        date: response.date || Math.floor(Date.now() / 1000)
                    });
                }
            })
        }
    });
});

api.get("/:resource/:id?/:info?", (req, res, next) => {
    const resource = req.params.resource;
    const id = req.params.id || null;
    const info = req.params.info || null;
    const query = req.query || null;

    if (allowed_endpoints.indexOf(resource) === -1) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }
    controller(resource, id, info, query, (err, response) => {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            res.json({
                success: true,
                result: response.data || response,
                date: response.date || Math.floor(Date.now())
            });
        }
    });
});
module.exports = api;