const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const subdomain = require('express-subdomain');
const cors = require("cors");

const db = require("./store/db");
const routes = require('./routes/index');
const api = require('./routes/api');

const app = express();

const router = express.Router();

const APIBuilder = require("./lib/APIBuilder");
const util = require("./util/Utility");

// View engine set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(subdomain('api', router));
app.use("/", routes);
app.use("/api", api);

module.exports = app;