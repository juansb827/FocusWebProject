/**
 * Initializes  the sequelize library
 */
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
//var env = process.env.NODE_ENV || "development";
var env= "DEV";
var config = require(  './../../config/db_config_DEV');
var modelsFolder = path.join(__dirname,'./../models/relational/');



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
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like
}
getDatabases().forEach(function(db_name){		
	var confDb=config[db_name];
	confDb.operatorsAliases;
	//var seq = new Sequelize(confDb.database, confDb.username, confDb.password, confDb);	
	confDb.host=process.env.DB_HOST;
	var seq = new Sequelize(confDb.database, confDb.username, process.env.DB_PASSWORD, confDb);	
	var db_conf ={name : db_name , sequelize : seq , models : [] } ;
	dbs_config[db_name]=db_conf;	
	
});


/*
* Loads all the models from the 'models/relational' folder
*/
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
//console.log('Models Loaded:'+Object.keys(models).length)
module.exports=dbs_config;


