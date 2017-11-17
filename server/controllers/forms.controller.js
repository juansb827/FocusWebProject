
var express = require('express');
var router = express.Router();
var formService= require('../services/form.service')


// routes
router.post('/', saveForm);
router.get('/:id',getForm)

 
module.exports = router;
//TODO  transform de request body into something that sequelize can save in bd.
function saveForm(req,res){
    if (1==1) {res.send(req.body); return}
    let tbTurnos=global.databases["db_focus"].models["TBTURNOS"];
    tbTurnos.create(
        {Ccliente:"21asklf", Ctipdoc: "CS",Nano:2017,Nmes: 11,Ndia:14,
        Natendido:0,Nturno:'21',    Ccodcntr:   "ASDLAKDLSA"
        }
        
        )
    .then( param=>res.status(200).send(param))
    .catch( err=> res.status(400).send(err))
   /* 
    .findOne()
        .then(data=>res.status(200).send(data))
    console.log("saveForm");
    //res.sendStatus(200);
    */

}


function getForm(req,res){
    if (1==1) res.send(req.body);
    formService.getFormById('getdsa',true)
    .then(form=>{
        res.send(form);
    })
    .catch(err=> res.status(400).send(err));


}
    
