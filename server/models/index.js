var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/databases_config.json')[env];


/*
*	List all the databases for the current environment in database_config.json 
*/
function getDatabases()
{	
	var obj=config;
	var res = [];
	for(var m in obj) {        
		res.push(m);        
	}
	return res;
}



/* 
* Creates an object that looks like this
* { database_a : { name: "database_a", sequelize: Object, models : []},
*	database_b : { name: "database_a", sequelize: Object, models : []},
*	etc..
* }
*	-the sequelize Object will later be used to generate the conection, and for raw queries 
* 	-models:[], a model represents a table, used for queries
*/
var databases={};
getDatabases().forEach(function(db_name){		
	var confDb=config[db_name];
	var seq = new Sequelize(confDb.database, confDb.username, confDb.password, confDb);	
	var database ={name : db_name , sequelize : seq , models : [] } ;
	databases[db_name]=database;	
});


/*
* Loads all the models in the model folder
*/
fs
.readdirSync(__dirname)
//removes this file (index.js) from the file list
.filter(function (file) {
	return (file.indexOf(".") !== 0) && (file !== basename);
})
.forEach(function(file) {
	if (file.slice(-3) !== '.js') return;
	
	//After this Each Database Object will have all the models
	Object.keys(databases).forEach(function(db_name){
		var sequelize=databases[db_name].sequelize;
		//generates the model
		var model = sequelize['import'](path.join(__dirname, file));		
		databases[db_name].models[model.name] = model;
	}) ;
});

Object.keys(databases).forEach(function(db_name) {
	databases[db_name].models.forEach(function(model){
		if (model.associate ) { model.associate(models); 		 	
		}
	});
});



module.exports=databases;




















