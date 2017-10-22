var SequelizeAuto = require('sequelize-auto')


var configFile = require('./sq-auto');


configFile.dialect = 'mssql';
configFile.port =  1433;
configFile.host = '198.27.127.208';
configFile.storage = 'db_focus';
//Si no genera ningunar archivo, ir a node_modules/sequelize-auto y probar
//console.log("INTERSECTION",_.intersection(__tables, self.options.tables) );
configFile.tables = ["SYSEMPRESAS","SYSAPLHABILITADAS","SYSMENUFOCUS"];
configFile.directory = __dirname+"/models/";

var auto = new SequelizeAuto('db_focus', 'focusmng',  'focus..6789', configFile);

auto.run(function (err) {
	console.log(__dirname );
  if (err) throw err;
  console.log('Done!');
});