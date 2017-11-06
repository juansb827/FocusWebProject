var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
//var env = process.env.NODE_ENV || "development";
var env= "DEV";
var config = require(__dirname + '/../config/db_config_'+env);
var modelsFolder = __dirname+'/../models/';


/*
*	List all the databases for the current db_config.json 
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
*	-the sequelize Object will later be used to generate the conection, and for raw queries. 
* 	-models:[], a model represents a table, used for queries
*/
var dbs_config={};
getDatabases().forEach(function(db_name){		
	var confDb=config[db_name];
	
	var seq = new Sequelize(confDb.database, confDb.username, confDb.password, confDb);	
	var db_conf ={name : db_name , sequelize : seq , models : [] } ;
	dbs_config[db_name]=db_conf;	
	
});


/*
* Loads all the models in the model folder
*/
console.log("base",modelsFolder);
fs
.readdirSync(modelsFolder)
//removes this file (index.js) from the file list
.filter(function (file) {
	
	return (file.indexOf(".") !== 0) && (file !== basename);
})
.forEach(function(file) {
	if (file.slice(-3) !== '.js') return;	
	//After this Each Database Object will have all the models
	Object.keys(dbs_config).forEach(function(db_name){
		var sequelize=dbs_config[db_name].sequelize;
		//generates the model
		var model = sequelize['import'](path.join(modelsFolder, file));		
		dbs_config[db_name].models[model.name] = model;
	}) ;
});

/*
Object.keys(dbs_config).forEach(function(db_name) {
	dbs_config[db_name].models.forEach(function(model){
		if (model.associate ) { model.associate(models); 		 	
		}
	});
});
*/

console.log('Databases configuration Loaded, environment:'+env);
module.exports=dbs_config;


