
var async = require('async');
var fs = require('fs');



var errorHandler=require('./app/utils/errorHandler')
var server = require('./config/initializers/server');
var connectionTester = require('./config/initializers/relational_db_connection_tester');
var appError = require('./app/utils/error').appError
var errorTypes = require('./app/utils/error').errorTypes;


//Creates Logs folder if it does not exists
var dir = './logs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
var logger = require('./app/utils/logger');


// Load Environment variables from .env file
require('dotenv').load();

// Set up configs

async.series([
	function initializeDbConnection(callback){
		//Connects to MongoDB
		require('./config/initializers/mongodb');
		//Initializes Sequelize
		return callback();
		var seq_configs = require('./app/database/sequelize_config_loader');
		//Checks if connections to Relational DBs are OK
		connectionTester.testConnections(seq_configs,callback);
		
		
		
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

