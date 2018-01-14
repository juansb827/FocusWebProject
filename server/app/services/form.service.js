'use strict'
var logger = require('./../utils/logger');
var fs = require('fs');
var Q = require('q');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

var formsPath = __dirname + '/../forms/';
var benchmark = require('./../utils/benchmark');
var appError = require('./../utils/error').appError
var errorTypes = require('./../utils/error').errorTypes;
var service = {};

service.getFormById = getFormById;
service.saveFormData = saveFormData;
service.save = save;
module.exports = service;

var databases = require('./../database/sequelize_config_loader');

var defaultValues = {
    "lineaNaviera": { "value": "ROT", "label": "ROTTERDAN" },
    "nitClienteCarga": { "value": "900547176", "label": "FOCUS SOFTWARE SOLUTIONS SAS" },
    "numTurno": 13,
    "fechaArriboPto": "31-12-2018"


}

var forms = {
    "turnos_inspeccion": {
        "fileName": "turnos_inspeccion",
        "form": null,
        "dbconfig": null
    }
}




Object.keys(forms).forEach(formName => {  
    let formConfig=forms[formName];
    let start=benchmark();
    formConfig.form = require(formsPath + formConfig.fileName + '.json');   
    benchmark(start,"Loading the forms");
    formConfig.dbconfig = require(formsPath + formConfig.fileName + '_dbconfig.json');
});

var form = require(formsPath + 'turnos_inspeccion.json');
function getFormById(formId, removeDbInfo) {
    return new Promise(function (resolve, reject) {
        if (!forms[formId]) resolve(null);        
        const form = JSON.parse(JSON.stringify(forms[formId].form));

        form.fields.forEach(function (field) {
            if (defaultValues[field.id]) {
                field.value = defaultValues[field.id];
            }
        });      
        
        resolve(form);

    })



}


function save(formId, formData) {
    return new Promise(function (resolve, reject) {        
        if (!forms[formId]) reject(new appError(errorTypes.NOT_FOUND, "No such form:" + formId, true));
        const formConfig = JSON.parse(JSON.stringify(forms[formId].dbconfig));
        parseData(formData, formConfig)
        .then(parsedData => {
            return saveFormData(parsedData);
        })
        .then(savedData => resolve(savedData))
        .catch(err => { reject(err) });
    })
}


/** 
    Saves the data of a form into the DB.    
    @param {*} formData - Data in  a structure that Sequelize can use.
  
    TODO:
    If there is more than 1 model (Table), the inserts will be executed inside a transaction 
    
*/
function saveFormData(formData) {

    /*
    Object.keys(formData).forEach(tableName => {
        let seqInstance = global.databases["db_focus"].models[tableName];
        return tbTurnos.create(formData[tableName])
    }) */
    return new Promise((resolve, reject) => {
        let seqInstance = databases["db_focus"].models["TBTURNOS"];
        return seqInstance.create(formData["TBTURNOS"])
            .then(data => {
                console.log("her");
                resolve(data);
            })
            .catch(err => {
                if (err.name == "SequelizeValidationError")
                    return reject(new appError(errorTypes.BAD_REQUEST, "Form data does not match the schema correcty", true, err));
                else return reject(err);
            });
    })


}

//todo parametrize and move to service
/**
 *  Transforms formData into an object that Sequelize can use.
 *   eg:
    {
    ModelName1: {  Field1: Value1   , Field2,Value2 ...}
    ModelName2: {  Field1: Value1   , Field2,Value2 ...}
    etc..
    }
 * @param {*} formData 
 */
function parseData(formData, config) {
    return new Promise(function (resolve, reject) {
        let output = {};
        //TODO: include functionality for multiple tables
        const targetTable = config.targetTable;
        if (!targetTable) {
            logger.error("Invalid configuration file, no target table");
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
                logger.info(fieldId + "Ignored field because it has no associated configuration in _dbcon.json")
            }
        });

        resolve(output);

    });
}


