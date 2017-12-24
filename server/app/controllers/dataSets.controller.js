var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

// routes

router.get('/:_id', get);
module.exports = router;

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

function get(req,res){
    const dataSetId=req.params._id;
    let setInfo=dataSets[dataSetId];
    //If it has modelName it means that it must be loaded from database
    if(setInfo.modelName){
        let seqInstance = global.databases["db_focus"].models[setInfo.modelName];        
        seqInstance.findAll(setInfo)
                .then(data=>{res.send({items:data});console.log(data.length)})
                .catch(err=>res.send(err));
    }else{
        res.send({items:setInfo});
    }
    
}