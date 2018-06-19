#!/usr/bin/env node



var sequelize = require("sequelize");
var finished = 0;
var errors = 0;
var logger = require('./../../app/utils/logger');


let onFinish;




/**
*	Called when a connection with a database is done
*/
function onConnectionChecked(couldConnect,dbsCount) {

	finished++;
	if (!couldConnect) errors++;
	if (finished == dbsCount) {
		logger.info("Finished with " + errors + " failed db conections");
		onFinish();
	}
}


/**
*	
*/
var testConnections=function (dbsConfiguration,callback) {	
	const dbsCount=Object.keys(dbsConfiguration).length;
	onFinish=callback;
	Object.keys(dbsConfiguration).forEach(function (db_name) {
		dbsConfiguration[db_name].sequelize		
		.authenticate()
		.then(() => {
			logger.info("Connection to " + db_name + " was successful");
			onConnectionChecked(true,dbsCount);
		})
		.catch(err => {
			logger.error("Error connecting to " + db_name);
			logger.error(err);
			onConnectionChecked(false,dbsCount);
		});
	
	});
}

module.exports={testConnections:testConnections};














