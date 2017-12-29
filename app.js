const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const subdomain = require('express-subdomain');
const cors = require("cors");

const db = require("./store/db");
const api = require('./routes/api');

const app = express();

const router = express.Router();

// CORS headers
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(subdomain('api', router));
app.use("/api", api);

// Telemetry middleware
app.use((req, res, callback) => {
    if (req.originalUrl.indexOf("/api") === 0) {
        // + total queries
    }
});

module.exports = app;