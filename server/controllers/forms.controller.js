var express = require('express');
var router = express.Router();
var formService = require('../services/form.service');
var fs = require("fs");
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var Q = require('q');
// routes
router.post('/', saveForm);
router.get('/:id', getForm)


module.exports = router;
//TODO  transform de request body into something that sequelize can save in bd.
function saveForm(req, res) {
  //  res.send(req.body) ; 
    //if (1 == 1) { return }
    /*
    formService.saveFormData2()
        .then( resp=> res.send(resp))
        .catch(err => res.status(400).send(err) );
    if (1 == 1) { return }
    */
    parseData(req.body)
       .then( parsedData=> formService.saveFormData(parsedData) )
        .then( resp=> res.send(resp))
        .catch(err => res.status(400).send(err) );
    

    
     
    /* 
     .findOne()
         .then(data=>res.status(200).send(data))
     console.log("saveForm");
     //res.sendStatus(200);
     */

}

function parseData(formData) {
    return new Promise(function (resolve, reject) {
        fs.readFileAsync(__dirname + '/../forms/inspeccion_dbcon.json')
            .then(configFile => {

                var config = JSON.parse(configFile);
                var fields = config.fields;

                let result = {};
                const targetTable = config.targetTable;
                if (!targetTable)
                    console.log("Invalid configuration file ")
                result[targetTable] = {};
                Object.keys(formData).forEach(fieldId => {
                    const fieldConf = fields[fieldId];
                    if (fieldConf) {
                        const fieldName = fieldConf.targetField || fieldConf.srcField;
                        const tableFields = result[config.targetTable];
                        tableFields[fieldName] = formData[fieldId];
                    } else {
                        console.log(fieldId + "Ignored because it has no associated configuration in inspeccion_dbcon.json")
                    }
                })                
                resolve(result);
            }, err => {
                reject(err);
            });

    });
}

function getForm(req, res) {
    //if (1 == 1) res.send(req.body);
    formService.getFormById('getdsa', true)
        .then(form => {
            res.send(form);
        })
        .catch(err => res.status(400).send(err));


}

