var mongoose = require('mongoose');
mongoose.connect('mongodb://juansb827:'+process.env.MONGO_PASS+'@ds163806.mlab.com:63806/focusdb');