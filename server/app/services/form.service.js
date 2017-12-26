'use strict'
var formsPath = __dirname + '/../forms/';
var fs = require("fs");
var Q = require('q');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var appError = require('./../utils/error').appError
var errorTypes = require('./../utils/error').errorTypes;
var service = {};

service.getFormById = getFormById;
service.saveFormData = saveFormData;

module.exports = service;

var defaultValues={     
   "lineaNaviera" : {"value": "ROT", "label" :"ROTTERDAN"},
   "nitClienteCarga" : {"value": "900547176", "label" :"FOCUS SOFTWARE SOLUTIONS SAS"} ,
   "numTurno" : 13,
   "fechaArriboPto": "31-12-2018"
   

}

var forms={
    "turnos_inspeccion" : "turnos_inspeccion"
}


function getFormById(formId, removeDbInfo) {
    return new Promise(function (resolve, reject) {
       const form_name=forms[formId];
       if(!form_name) resolve(null);      
        fs.readFileAsync(formsPath + form_name+'.json')
        .then(data=>{
            var form = JSON.parse(data);
                   
            if (removeDbInfo) delete form.db_info;
            //set default values
            form.fields.forEach(function(field) {
                if (defaultValues[field.id]){
                    field.value=defaultValues[field.id];
                }           
            });
            resolve(form);
        })   

    },err=>{
        reject(err.name + ': ' + err.message); 
    });
    
  

}

/*
{
            Ccliente: "21asklf", Ctipdoc: "CS", Nano: 2017, Nmes: 11, Ndia: 14,
            Natendido: 0, Nturno: '21', Ccodcntr: "ASDLAKDLSA"
        }

        {
 "cedula": "21asklf", "tipoDoc": "CS", "anio": 2017, "mes": 11, "dia": 14,
     "atendido": 0, "numTurno": 21, "codCntr": "ASDLAKDLSA"
}
*/
/** 
    Saves the data of a form in the DB.    
    @param {*} formData - Data in  a structure that Sequelize can use.
    eg:
    {
    ModelName1:   Field1: Value1   , Field2,Value2 ...
    ModelName2:   Field1: Value1   , Field2,Value2 ...
    etc..
    }
    TODO:
    If there is more than 1 model (Table), the inserts will be executed inside a transaction 
    
*/
function saveFormData(formData) {
    
    /*
    Object.keys(formData).forEach(tableName => {
        let seqInstance = global.databases["db_focus"].models[tableName];
        return tbTurnos.create(formData[tableName])
    }) */

    let seqInstance = global.databases["db_focus"].models["TBTURNOS"];
    return seqInstance.create(formData["TBTURNOS"]);
}

