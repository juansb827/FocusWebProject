
var async = require('async');
var server = require('./config/initializers/server');


var logger = require('./app/utils/logger');
var errorHandler=require('./app/utils/errorHandler')
var server = require('./config/initializers/server');
var appError = require('./app/utils/error').appError
var errorTypes = require('./app/utils/error').errorTypes;

// Load Environment variables from .env file
require('dotenv').load();

// Set up configs

async.series([
	function initializeDbConnection(callback){
		require('./app/database/mongodb.js');
		//var db_con_manager = require('./app/database/connection_manager');
		//db_con_manager(db_config,startServer); 
		callback();
	},
	function startServer(callback){
		server(callback);
	}
],function(err){
	if (err) {
		logger.error('[APP] initialization failed', err);
	  } else {
		logger.info('[APP] initialized SUCCESSFULLY');
	  }
}) 

