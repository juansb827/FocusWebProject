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

function saveForm(req, res) {
    let formId = req.params._id
    fs.readFileAsync(__dirname + '/../forms/'+formId+'.json')
        .then(configFile => {
            var config = JSON.parse(configFile);
            parseData(req.body, config)
                .then(parsedData => formService.saveFormData(parsedData))
                .then(resp => res.send(resp))
                .catch(err => { console.log("err", err); res.status(400).send(err) });

        })
}

//todo parametrize and move to service
/**
 *  Transforms formData into an object that Sequelize can use.
 * @param {*} formData 
 */
function parseData(formData, config) {
    return new Promise(function (resolve, reject) {
        let output = {};
        //TODO: include functionality for multiple tables
        const targetTable = config.targetTable;
        if (!targetTable) {
            console.log("Invalid configuration file, no target table ")
            reject();

        }


        output[targetTable] = {};

        Object.keys(formData).forEach(fieldId => {
            const fieldConf = config.fields[fieldId];
            if (fieldConf) {
                const fieldName = fieldConf.targetField || fieldConf.srcField;
                const tableFields = output[targetTable];
                tableFields[fieldName] = formData[fieldId];
            } else {
                console.log(fieldId + "Ignored because it has no associated configuration in inspeccion_dbcon.json")
            }
        })
        resolve(output);

    });
}

function getForm(req, res,next) {
    logger.info("Getting e form");
    logger.error("Er");
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

