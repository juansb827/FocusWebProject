
var express = require('express');
var router = express.Router();


// routes
router.post('/', saveForm);

 
module.exports = router;

function saveForm(req,res){
    console.log("saveForm");
    res.sendStatus(200);
}