var express = require('express');
var main = require('../routes/routes');
var queries=require('../routes/queries');
var router = express.Router();

router.use('/focus', main);
router.use('/queries',queries);
module.exports = router;