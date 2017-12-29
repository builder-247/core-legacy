const express = require("express");
const api = express.Router();
const controllers = require("../controllers");

const Models = require("../models");

// Temporary path used for database testing
api.get("/devtest", function(req, res, next) {
    let player = Models["player"];

    player.find()
        .then(function(doc) {
            res.json(doc)
        });

    //player.findOneAndRemove({ id: "ef962ec2df6e48a2ac9d6062c1b84652"}).exec();

});

api.get("/:resource", function (req, res, next) {

    const resource = req.params.resource;
    const controller = controllers[resource];
    const query = req.query || null;

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.get(null, null, query, function (err, results) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
            return
        }
        res.json({
            success: true,
            results: results
        });
    });
});

api.get("/:resource/:id/:info?", function (req, res, next) {

    const resource = req.params.resource;
    const id = req.params.id;
    const info = req.params.info || null;
    const query = req.query || null;

    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    // CHANGES!
    controller.get(id, info, query, function (err, result) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
            return
        } else {
            res.json({
                success: true,
                result: result
            })
        }
    })
});

// TODO - Add auth
api.post("/:resource", function (req, res, next) {

    const resource = req.params.resource;

    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.create(req.body, function (err, result) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
            return
        }
        res.json({
            success: true,
            result: result
        })
    })
});

// ONLY FOR TESTING

api.delete("/:resource/:id", function (req, res, next) {

    const resource = req.params.resource;
    const id = req.params.id;

    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.delete(id, function (err, result) {
        if (err) {
            res.json({
                success: false,
                message: "Not Found"
            });
            return
        }
        res.json({
            success: true,
            result: result
        })

    })
});

module.exports = api;