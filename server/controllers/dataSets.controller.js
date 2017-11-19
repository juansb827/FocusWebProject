var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

// routes

router.get('/:_id', get);
module.exports = router;

function get(req,res){
    var dataSetId=req.params._id;
    let seqInstance = global.databases["db_focus"].models["TBCLIENTESLNA"];

    seqInstance.findAll({attributes:[ ['Cctelna','value'],['Cdesctelna','label'] ]})
        .then(data=>{res.send({items:data});console.log(data.length)})
        .catch(err=>res.send(err));
}