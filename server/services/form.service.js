'use strict'
var forms = __dirname + '/../forms/';
var fs = require("fs");
var Q = require('q');

var service = {};

service.getFormById = getFormById;
service.saveFormData = saveFormData;
service.saveFormData2 = saveFormData2;
module.exports = service;

var defaultValues={     
   "lineaNaviera" : {"value": "ROT", "label" :"ROTTERDAN"},
   "nitClienteCarga" : {"value": "900547176", "label" :"FOCUS SOFTWARE SOLUTIONS SAS"} ,
   "numTurno" : 13,
   "fechaArriboPto": "31-12-2018"
   

}


function getFormById(formId, removeDbInfo) {
    var deferred = Q.defer();
    fs.readFile(forms + 'inspeccion.json', (err, data) => {
        var form = JSON.parse(data);
        if (err) deferred.reject(err.name + ': ' + err.message);        
        if (removeDbInfo) delete form.db_info;
        form.fields.forEach(function(field) {
            if (defaultValues[field.id]){
                field.value=defaultValues[field.id];
            }            
        });
        deferred.resolve(form);

    })

    return deferred.promise;

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

/**
 * DELETE THIS
 * @param {*} formData 
 */
function saveFormData2(formData) {

    let tbTurnos = global.databases["db_focus"].models["TBTURNOS"];
    //console.log("data",formData["TBTURNOS"]);

    return tbTurnos.create({
        Ccliente: "21asklf", Ctipdoc: "CS", Nano: 2017, Nmes: 11, Ndia: 14,
        Natendido: 0, Nturno: '21', Ccodcntr: "ASDLAKDLSA"
    }
    )


}