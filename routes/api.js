const express = require("express");
const api = express.Router();
const controllers = require("../controllers");

api.get("/:resource", function (req, res, next) {

    const resource = req.params.resource;
    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.get(req.query, null, function (err, results) {
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

    /*if (resource === "user") {
     UserController.find(req.query, function (err, results) {

     })
     }*/
});

api.get("/:resource/:id/:info?", function (req, res, next) {

    const resource = req.params.resource;
    const id = req.params.id;
    const info = req.params.info || null;

    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.get(id, info, function (err, result) {
        if (err) {
            res.json({
                success: false,
                message: "Not Found"
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