
var express = require('express');
var router = express.Router();
var formService= require('../services/form.service')


// routes
router.post('/', saveForm);
router.get('/:id',getForm)

 
module.exports = router;

function saveForm(req,res){
    console.log("saveForm");
    res.sendStatus(200);

}


function getForm(req,res){
            
    formService.getFormById('getdsa',true)
    .then(form=>{
        res.send(form);
    })
    .catch(err=> res.status(400).send(err));


}
    
