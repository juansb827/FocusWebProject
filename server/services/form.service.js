var forms = __dirname + '/../forms/';
var fs = require("fs");
var Q= require('q');

var service={};

service.getFormById=getFormById;

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