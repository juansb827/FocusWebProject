var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var sequelize = require("sequelize");
const Op = sequelize.Op

var databases = require('./../database/sequelize_config_loader');
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
            "Cidcedula",
            "Ccelular",
            "cdesconductor", 
            "cdestranspor", 
            "Cplaca"
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
            "Ctipocntr",
            "Ctamcntr",
            "Ccodisocntr",
            "Npesmaxcntr",
            "Ntaracntr"
        ],
        "columnMapping": {
            "Ccodcntr": "codContenedor"
        }

    },
    "InfoClienteByNitOrName": {
        "modelName": "TERCEROS",
        "raw": true,
        "statement": "SELECT TOP 10 Tercero AS value, Ter_razons AS label FROM TERCEROS WHERE Ter_razons like :search_term or tercero like :search_term ",
        "queryCondition":"startsWith" 
    }
};

/**  
  
    @param {string} req - Contains the Id of the query to execute, and the params for that query
    @param {string} res - Response 
*/
function doQuery(req, res) {
    const queryId = req.params._id;
    let queryInfo = queries[queryId];
    let dbCon
    setParamsIntoQuery(queryInfo, req.query);
    if (!queryInfo.raw) {
        dbCon = databases["db_focus"].models[queryInfo.modelName];
    } else {
        dbCon = databases["db_focus"].sequelize;
    }

    if (queryInfo.raw) {
        dbCon.query(queryInfo.statement, { replacements: queryInfo.replacements,
            type: sequelize.QueryTypes.SELECT  })
            .then(data => {
                if (!data) data = {};
                res.send(data)
            })
    }
    else if (!queryInfo.resultType || queryInfo.resultType == SINGLE_ROW) {
        dbCon.findOne(queryInfo)
            .then(data => {
               // if (!data) data = {};
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
    @param {string} params - Query parameters of the request. Will be set into the queryInfo
    
*/
function setParamsIntoQuery(queryInfo, params) {

    if (queryInfo.raw) {
        let replacements = {};
        Object.keys(params).forEach(paramName => {
            
            const paramValue = params[paramName];
            //TODo parametirze
            replacements[paramName]= paramValue+'%';
        });
        queryInfo.replacements=replacements;
        return;
    }

    const mapping = queryInfo.columnMapping;
    Object.keys(queryInfo.where).forEach(columnName => {
        const fieldName = mapping[columnName];

        if (!queryInfo.queryCondition) {
            queryInfo.where[columnName] = params[fieldName];
        } else if (queryInfo.queryCondition == QUERY_CONDITION_CONTAINS) {
            queryInfo.where[columnName] = { [Op.like]: '%' + params[fieldName] + '%' };
        } else if (queryInfo.queryCondition == QUERY_CONDITION_STARTS_WITH) {
            //  queryInfo.where[columnName] = { [Op.like]: params[fieldName] + '%' };
        }
    });
}