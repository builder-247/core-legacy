/**
 * File managing configuration for the application
 **/
const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) {
    dotenv.load();
}

const defaults = {
    HYPIXEL_API_KEY: "", // To get your API key, type '/api' on Hypixel
    HYPIXEL_API_LIMIT: 120, // API key throttle limit
    NODE_ENV: 'development',
    MOJANG_STATUS_INTERVAL: 15000, // Interval between refreshing Mojang status in milliseconds
    DB_URL: "mongodb://localhost/slothpixel" // Url of the MongoDB database
};

// ensure that process.env has all values in defaults, but prefer the process.env value
Object.keys(defaults).forEach((key) => {
    process.env[key] = (key in process.env) ? process.env[key] : defaults[key];
});
if (process.env.NODE_ENV === 'development') {
    // force PORT to null in development so we can run multiple web services without conflict
    process.env.PORT = '';
}
if (process.env.NODE_ENV === 'test') {
    process.env.PORT = ''; // use service defaults
    // process.env.POSTGRES_URL = process.env.POSTGRES_TEST_URL;
    // process.env.CASSANDRA_URL = process.env.CASSANDRA_TEST_URL;
    // process.env.REDIS_URL = process.env.REDIS_TEST_URL;
    process.env.SESSION_SECRET = 'testsecretvalue';
    process.env.ENABLE_MATCH_CACHE = 1;
    process.env.FRONTEND_PORT = 5001;
    process.env.PARSER_PORT = 5201;
}
// now processes can use either process.env or config
module.exports = process.env;
