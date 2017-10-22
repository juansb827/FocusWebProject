var express = require('express');
var logger = require('morgan');
var app = express();
//var routes= require("./routes/routes")
var routes= require('./routes');
var jsonParser= require("body-parser").json;


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


app.use("/",routes);




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


 

module.exports = app;