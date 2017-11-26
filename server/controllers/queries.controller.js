var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var sequelize = require("sequelize");
const Op = sequelize.Op
// routes

router.get('/:_id', doQuery);
module.exports = router;

const MULTIPLE_ROWS = "multipleRows";
const SINGLE_ROW = "singleRow";
const LOW_LIMIT = "10";
const QUERY_CONDITION_CONTAINS = "contains";
const QUERY_CONDITION_STARTS_WITH = "startsWith";
const QUERY_CONDITION_END_WITH = "startsWith";
var queries = {
    "infoConductor": {
        "modelName": "TB26CONDUCTORES",
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
        "modelName": "TBCONTENEDORES",
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

    },
    "infoClienteByNombre": {
        "modelName": "TERCEROS",
        "where": {
            "Ter_razons": ''

        },
        "attributes": [
            ["Tercero", "value"],
            ["Ter_razons", "label"]
        ],
        "columnMapping": {
            "Ter_razons": "razonSocialCliente"
        },
        "queryCondition": "contains",
        "resultType": "multipleRows",
        "limit": 10
    },
    "infoClienteByNit": {
        "modelName": "TERCEROS",
        "where": {
            "Tercero": ''

        },
        "attributes": [
            ["Tercero", "value"],
            ["Ter_razons", "label"]
        ],
        "columnMapping": {
            "Tercero": "nitCliente"
        },
        "queryCondition": "startsWith",
        "resultType": "multipleRows",
        "limit": 10
    }
};

/**  
    Puts the params inside the "where" of the query info, according to the columnMapping property.
    @param {string} req - Contains the Id of the query to execute, and the params for that query
    @param {string} res - Response 
*/
function doQuery(req, res) {
    const queryId = req.params._id;
    let queryInfo = queries[queryId];
    setParamsIntoQuery(queryInfo, req.query);
    let dbCon = global.databases["db_focus"].models[queryInfo.modelName];

    if (!queryInfo.resultType || queryInfo.resultType == SINGLE_ROW) {
        dbCon.findOne(queryInfo)
            .then(data => {
                if (!data) data = {};
                res.send(data)
            })
            .catch(err => res.send(err));
    } else {
        dbCon.findAll(queryInfo)
            .then(data => {
                if (!data) data = [];
                res.send(data)
            })
            .catch(err => res.send(err));
    }

}

/**  
    Puts the params inside the property "where"  of queryInfo, according to the columnMapping property.
    @param {Object} queryInfo - Options (except columnMapping) that sequelize  uses for a query
    @param {string} params - Parameters to set into the queryInfo 
    
*/
function setParamsIntoQuery(queryInfo, params) {
    const mapping = queryInfo.columnMapping;
    Object.keys(queryInfo.where).forEach(columnName => {
        const fieldName = mapping[columnName];
        if (!queryInfo.queryCondition) {
            queryInfo.where[columnName] = params[fieldName];
        } else if (queryInfo.queryCondition == QUERY_CONDITION_CONTAINS) {
            queryInfo.where[columnName] = { [Op.like]: '%' + params[fieldName] + '%' };
        } else if (queryInfo.queryCondition == QUERY_CONDITION_STARTS_WITH) {
            queryInfo.where[columnName] = { [Op.like]: params[fieldName] + '%' };
        }
    });
}