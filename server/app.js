var express = require('express');
var logger = require('morgan');
var app = express();
var jsonParser= require("body-parser").json;
var nconf = require('nconf');
var db_config= require('./app/database/config_loader');
global.databases= db_config;
var db_con_manager= require('./app/database/connection_manager');


// Load Environment variables from .env file
require('dotenv').load();

// Set up configs
nconf.use('memory');
// First load command line arguments
nconf.argv();
// Load environment variables
nconf.env();

console.log("ENV",nconf.get('NODE_ENV'));
app.use(logger("dev"));
app.use(jsonParser());

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if(req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
		return res.status(200).json({});
	}
	next();
});


app.use('/', require('./app/routes'));


//catch 404 and forward to error handler
app.use(function(req, res, next){
	var err= new Error("Not found");
	err.status = 404;
	next(err);
});

//error handler
app.use(function(err, req, res, next){
	console.log("Error handler", err);

	res.status(err.status || 500);
	res.json({
		error: {
			message:  "No error msg" || err.message,
			error: err//(app.get('env') === 'development') ? err : {}
		}
	});

});


app.set('port', process.env.PORT || 3000);


/**
* Starts the server
*/
function startServer(){

	var server = app.listen(app.get('port'), function() {
		var db = require('./app/database/mongodb.js');
		console.log('Express server listening on port ' + server.address().port);	
		//global.databases=databases;
	});	
};

startServer();

//db_con_manager(db_config,startServer); 

module.exports = app;