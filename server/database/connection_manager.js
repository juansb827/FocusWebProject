#!/usr/bin/env node



var sequelize = require("sequelize");
var finished = 0;
var errors = 0;

let onFinish; //executed when 




/**
*	Called when a connection with a database is done
*/
function fin(couldConnect,dbsCount) {

	finished++;
	if (!couldConnect) errors++;
	if (finished == dbsCount) {
		console.log("Finished with " + errors + " failed db conections");
		onFinish();
	}
}


/**
*	
*/
var connect=function (databases,callback) {	
	const dbsCount=Object.keys(databases).length;
	onFinish=callback;
	Object.keys(databases).forEach(function (db_name, index) {
		databases[db_name].sequelize.sync().then(function () {
			console.log("Connected to " + db_name);
			fin(true,dbsCount);
		}).error(function (err) {
			console.log("Error connecting to " + db_name);
			console.log(err);
			fin(false,dbsCount);
		});

	});
}

module.exports=connect;














