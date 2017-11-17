var forms = __dirname + '/../forms/';
var fs = require("fs");
var Q= require('q');

var service={};

service.getFormById=getFormById;
service.saveFormData=saveFormData;
service.saveFormData2=saveFormData2;
module.exports=service;


function getFormById(formId,removeDbInfo){
    var deferred= Q.defer();
    fs.readFile(forms+'inspeccion.json',(err,data)=>{
        var form=JSON.parse(data);
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (removeDbInfo) delete form.db_info;
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
function saveFormData(formData){
    console.log("data",formData["TBTURNOS"]);
    let tbTurnos = global.databases["db_focus"].models["TBTURNOS"];
    //console.log("data",formData["TBTURNOS"]);
    
    return tbTurnos.create(
        formData["TBTURNOS"]
    )
    
    
}

function saveFormData2(formData){
  
    let tbTurnos = global.databases["db_focus"].models["TBTURNOS"];
    //console.log("data",formData["TBTURNOS"]);
    
    return tbTurnos.create({
        Ccliente: "21asklf", Ctipdoc: "CS", Nano: 2017, Nmes: 11, Ndia: 14,
        Natendido: 0, Nturno: '21', Ccodcntr: "ASDLAKDLSA"
    }
    )
    
    
}