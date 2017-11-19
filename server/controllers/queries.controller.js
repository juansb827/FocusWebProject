var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var sequelize = require("sequelize");
// routes

router.get('/:_id', doQuery);
module.exports = router;


var queries = {
    "infoConductor": {
        "modelName" : "TB26CONDUCTORES",
        "where": {
            "Cidcedula": "",
        },
        "attributes": [
            ["Cidcedula", "cedulaConductor"],
            ["Ccelular", "celularConductor"],
            ["cdesconductor", "nombreConductor"],
            ["cdestranspor", "empresaTransporte"],
            ["Cplaca", "placaVehiculo"]
        ],
        "columnMapping": {
            "Cidcedula": "cedulaConductor"
        }

    },
    "infoContenedor": {
        "modelName" : "TBCONTENEDORES",
        "where": {
            "Ccodcntr": "",
        },
        "attributes": [
            ["Ctipocntr", "tipoContenedor"],
            ["Ctamcntr", "tamanoContenedor"],
            ["Ccodisocntr", "codIsoContenedor"],
            ["Npesmaxcntr", "pesoMaxContenedor"],
            ["Ntaracntr", "taraContenedor"]
        ],
        "columnMapping": {
            "Ccodcntr": "codContenedor"
        }

    }
};

/**  
    Puts the params inside the "where" of the query info, according to the columnMapping property.
    @param {string} req - Contains the Id of the query to execute, and the params for that query
    @param {string} res - Response 
*/
function doQuery(req, res) {    
    const queryId = req.params._id;
    let queryInfo=queries[queryId];    
    setParamsIntoQuery(queryInfo,req.query);           
    let dbCon = global.databases["db_focus"].models[queryInfo.modelName];
    dbCon.findOne(queryInfo)
        .then(data =>{ 
            if(!data) data={};
            res.send(data)
        })
        .catch(err =>res.send(err));
}

/**  
    Puts the params inside the property "where"  of queryInfo, according to the columnMapping property.
    @param {Object} queryInfo - Options (except columnMapping) that sequelize  uses for a query
    @param {string} params - Parameters to set into the queryInfo 
    
*/
function setParamsIntoQuery(queryInfo,params){
    const mapping=queryInfo.columnMapping;
   
    Object.keys(queryInfo.where).forEach(columnName=>{
        const fieldName=mapping[columnName];
        queryInfo.where[columnName]=params[fieldName];
    });
}