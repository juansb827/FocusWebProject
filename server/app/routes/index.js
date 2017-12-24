var express = require('express');
var main = require('../routes/routes');
var queries = require('../routes/queries');
var router = express.Router();

router.use('/focus', main);
router.use('/queries', queries);

//middleware
/*
function bye(req,res,next){	
    //	req.body={"d":2};
        next();
      }
    app.post("/forms",bye,require('./app/controllers/forms.controller'));
    */

/* Validates the request token unless
*/    
function validateRequest(req, res, next){
    
    const excluded=['/api/v1/auth/login', '/api/v1/auth/register'] 
    for(let i=0;i< excluded.length;i++){
        if(req.originalUrl===excluded[i]){
            return next();
        }
    } 
    return require('./../services/auth.service').validateRequest(req,res,next);
}


// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
router.use('/api/v1/*', [validateRequest]);


/*
 * Routes that can be accessed only by autheticated users
 */
router.use("/api/v1/auth", require('./auth.js'));
router.use("/api/v1/users", require('./users'));
router.use("/api/v1/forms", require('./../controllers/forms.controller'));
router.use("/api/v1/datasets", require('./datasets'));
router.use("/api/v1/queries", require('./../controllers/queries.controller'));

/*
 * Routes that can be accessed only by authenticated & authorized users
 */

 //TODO

module.exports = router;

