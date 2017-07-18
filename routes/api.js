const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const controllers = require("../controllers");

router.get("/:resource", function (req, res, next) {

    const resource = req.params.resource;
    const controller = controllers[resource];

    if (controller === undefined) {
        res.json({
            success: false,
            message: "Invalid Resource Request: " + resource
        });
        return
    }

    controller.find(req.query, function(err, results) {
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

router.get("/:resource/:id", function (req, res, next) {

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

    controller.findById(id, function (err, result) {
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
router.post("/:resource", function (req, res, next) {

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

router.delete("/:resource/:id", function (req, res, next) {

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
        } else {
            res.json({
                success: true,
                result: result
            })
        }
    })
});

module.exports = router;