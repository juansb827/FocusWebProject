var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config2.json')[env];

function getDatabases(obj)
{
	var res = [];
	for(var m in obj) {        
		res.push(m);        
	}
	return res;
}


var databases=[];
getDatabases(config).forEach(function(db_name){	
	
	var confDb=config[db_name];
	var seq = new Sequelize(confDb.database, confDb.username, confDb.password, confDb);	
	var database ={name : db_name , sequelize : seq , models : {}} ;
	databases.push(database);
	
	
});

fs
.readdirSync(__dirname)
.filter(function (file) {
	return (file.indexOf(".") !== 0) && (file !== basename);
})
.forEach(function(file) {
	if (file.slice(-3) !== '.js') return;

	databases.forEach(function(database){

		var sequelize=database.seq;
		var model = sequelize['import'](path.join(__dirname, file));
		console.log(model.name);
		database.models[model.name] = model;
	}) ;


});

databases.forEach(function(database) {
	database.models.forEach(function(model){
		if (model.associate ) { model.associate(models); 		 	
		}
	});
});

databases.Sequelize=Sequelize;

module.exports




















