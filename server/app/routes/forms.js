var express = require('express');
var router = express.Router();
var formService = require('../services/form.service');
var fs = require("fs");
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var Q = require('q');
var logger = require('./../utils/logger');


var appError= require('./../utils/error').appError
var errorTypes= require('./../utils/error').errorTypes;

// routes
router.post('/:_id', saveForm);
router.get('/:_id', getForm);




module.exports = router;

function saveForm(req, res,next) {
    let formId = req.params._id
    formService.save(formId,req.body)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>next(err));
    /*
    fs.readFileAsync(__dirname + '/../forms/'+formId+'.json')
        .then(configFile => {
            var config = JSON.parse(configFile);
            parseData(req.body, config)
                .then(parsedData => formService.saveFormData(parsedData))
                .then(resp => res.send(resp))
                .catch(err => next(err));
                    

        }) 
    */
}


function getForm(req, res,next) { 
    let formId = req.params._id
    formService.getFormById(formId, true)
        .then(form => {
            if(!form) 
                return next (new appError(errorTypes.NOT_FOUND,`no such form:${formId}`,true));
            res.send(form);
        })
        .catch(err => 
            next (new appError(errorTypes.SERVER_ERROR,'Error getting the form',true,err))
        );
        


}

