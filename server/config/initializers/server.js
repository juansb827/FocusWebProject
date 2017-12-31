var express = require('express');
var bodyParser = require("body-parser");
var config = require('nconf');

var logger = require('./../../app/utils/logger');
var appError = require('./../../app/utils/error').appError
var errorTypes = require('./../../app/utils/error').errorTypes;

const env = config.get('NODE_ENV');


var app = express();

function start(callback) {
    app.use(require('morgan')("dev", { stream: logger.stream }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization,x-access-token");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
            return res.status(200).json({});
        }
        next();
    });

    app.use('/', require('../../app/routes/index'));


    //catch 404 and forward to error handler  middleware
    app.use(function (req, res, next) {
        next(new appError(errorTypes.NOT_FOUND, 'The given url does not match any route', true));
    });

    //error handler middleware
    app.use(function (err, req, res, next) {
        console.log("ERROR HANDLER");
        /* We log the error internaly */
        logger.error(err);


        /*
         * Remove Error's `stack` property. We don't want
         * users to see this at the production env
         */

        if (env !== 'development' && err.originalError) {
            delete err.originalError;
        }

        /* Finaly respond to the request */
        res.status(err.statusCode || 500).json({ "error": err });

    });


    app.listen(config.get('NODE_PORT'), function () {
        logger.info('[SERVER] Listening on port ' + config.get('NODE_PORT'));
        callback();

    });
}
module.exports = start;