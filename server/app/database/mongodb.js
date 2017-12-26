var mongoose = require('mongoose');
var nconf = require('nconf');
mongoose.connect('mongodb://juansb827:'+nconf.get('MONGO_PASS')+'@ds163806.mlab.com:63806/focusdb');