const errorTypes={    
    "NOT_FOUND" : {httpCode:404}, 
    "WRONG_CREDENTIALS" : {httpCode:401},
    "UNAUTHORIZED" : {httpCode:401},
    "SERVER_ERROR" :  {httpCode:500},
    "BAD_REQUEST" : {httpCode:400}
}

/**
 * 
 * @param {*} commonType 
 * @param {*} description 
 * @param {*} isOperational 
 * @param {*} error - Optional
 */
function appError(errorType, description, isOperational,error) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.originalError=error;
    this.errorType = errorType;
    this.statusCode= errorType.httpCode;
    this.description = description;
    this.isOperational = isOperational;
};

module.exports={
    errorTypes: errorTypes,
    appError:appError
}