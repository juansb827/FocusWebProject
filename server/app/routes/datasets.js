var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var appError= require('./../utils/error').appError
var errorTypes= require('./../utils/error').errorTypes;
// routes
var databases = require('./../database/sequelize_config_loader');
router.get('/:_id', get);
module.exports = router;

//Todo move to config file
var dataSets={
    "lineas":{
        "attributes":[ ['Cctelna','value'],['Cdesctelna','label'] ],
        "modelName": "TBCLIENTESLNA"
    },
    "gruposMovContenedores":{
        "attributes":[ ['Cgrupomov','value'],['Cdesmov','label'] ],
        "modelName": "TBGRUPOMOVCNTR"
    },
    "ciudades":{
        "attributes":[ ['Ccodsitcntr','value'],['Cdessitcntr','label'] ],
        "modelName": "TBSITCNTR"
    },
    "tiposTurno":[
        { value: "ENTRADA", label: "ENTRADA" },
        { value: "SALIDA", label: "SALIDA" }
    ],
    "tiposCarga" :[
        { "value": "EMPTY", "label": "EMPTY" },
        { "value": "FULL", "label": "FULL" }
    ]
    
}

function get(req,res,next){
    const dataSetId=req.params._id;
    let setInfo=dataSets[dataSetId];
    
    //If it has the modelName property it means that it must be loaded from the database
    if(!setInfo){
       next(new appError(errorTypes.NOT_FOUND,`No such Dataset:${dataSetId}`,true));
    }
    if(setInfo.modelName){  
        let seqInstance = databases[req.companyDb].models[setInfo.modelName];        
        seqInstance.findAll(setInfo)
                .then(data=>{                  
                        res.send({items:data});                                                         
                })
               .catch(err=>next(err));
    }else{
        res.send({items:setInfo});
    }
 
    
    
}