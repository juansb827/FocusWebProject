var express = require('express');
var logger = require('morgan');
var app = express();
//var routes= require("./routes/routes")
var routes= require('./routes');
var jsonParser= require("body-parser").json;

var db_config= require('./database/config_loader');
global.databases= db_config;
var db_con_manager= require('./database/connection_manager');




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


function bye(req,res,next){	
//	req.body={"d":2};
	next();
  }
app.post("/forms",bye,require('./controllers/forms.controller'));
app.use("/forms",require('./controllers/forms.controller'));




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
			message: err.message,
			errror: (app.get('env') === 'development') ? err : {}
		}
	});

});


app.set('port', process.env.PORT || 3001);


/**
* Starts the server
*/
function startServer(){
	var server = app.listen(app.get('port'), function() {
		console.log('Express server listening on port ' + server.address().port);	
		//global.databases=databases;
	});	
};

//startServer();

db_con_manager(db_config,startServer); 

module.exports = app;