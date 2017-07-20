const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const subdomain = require('express-subdomain');

const db = require("./store/db");
const routes = require('./routes/index');
const api = require('./routes/api');

const app = express();

const router = express.Router();

const APIBuilder = require("./lib/APIBuilder");
const HypixelAPIManager = require("./HypixelAPIManager");
const MojangAPIManager = require("./MojangAPIManager");
const util = require("./util/Utility");

// View engine set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(subdomain('api', router));
app.use("/", routes);
app.use("/api", api);

util.validatePlayer("hypixel", function(err, uuid) {
    if (err) {
        console.log("god damnit")
    } else {
        console.log(uuid)
    }
});

//386258427e6a4b4980ac32d12df89791
//ef962ec2df6e48a2ac9d6062c1b84652
/*HypixelAPIManager("player", "&uuid=ef962ec2df6e48a2ac9d6062c1b84652", function callback(error, data) {
    //console.log("Response: " + JSON.stringify(data));
    APIBuilder(data);
});*/

//processName();
//MojangAPIManager();



module.exports = app;