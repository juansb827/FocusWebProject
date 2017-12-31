var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var appError = require('./../utils/error').appError
var errorTypes = require('./../utils/error').errorTypes;

var User = require('./../models/nonrelational/user');


var secret = process.env.SESSION_SECRET

/**
 * Register an user in the db, and returns a token containing it's id
 * @param {*} password 
 */

//TODO:move to a config file
var companies = {
  "testCompany": "db_focus"
}
function registerUser(userInfo) {

  if (!userInfo.name) throw new appError(errorTypes.BAD_REQUEST, "Name is required", true);
  if (!userInfo.email) throw new appError(errorTypes.BAD_REQUEST, "Email is required", true);
  if (!userInfo.company) throw new appError(errorTypes.BAD_REQUEST, "Company is required", true);
  if (!userInfo.password) throw new appError(errorTypes.BAD_REQUEST, "Password is required", true);

  return bcrypt.hash(userInfo.password, 8).then(hashedPassword => {
    userInfo.password = hashedPassword;
    return User.create(userInfo);
  })
    .then(user => {
      return new Promise((resolve, reject) => {
        jwt.sign({ id: user._id }, secret, {
          expiresIn: 86400 // expires in 24 hours
        }, function (err, token) {
          if (err) return reject(err);
          else resolve({ auth: true, token: token });
        });
      })
    })

}

function authenticateUser(email, password) {
  return User.findOne({ email: email })
    .lean().exec()
    .then(user => {
      if (!user) return null;
      var passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) return null;
      var token = jwt.sign({ id: user._id }, secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      var letUser = _.omit(user, 'password');
      return { auth: true, user: letUser, token: token };
    })
}


function validateRequest(req, res, next) {
  var token = (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers['x-access-token'];

  if (!token)
    return next(new appError(errorTypes.UNAUTHORIZED, 'No token provided', true));


  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      if (err.expiredAt)
        return next(new appError(errorTypes.UNAUTHORIZED, 'Token Expired', true, err));
      else
        return next(new appError(errorTypes.SERVER_ERROR, 'Failed to authenticate token', true, err));
    }

    const userId = decoded.id;
    req.userId = userId


    User.findById(userId).exec().then(user => {
      if (!user)
        return next(new appError(errorTypes.UNAUTHORIZED, 'The user associated with the token no longer exists', true));
      else {
        req.userCompany = user.company;
        req.companyDb = companies[user.company];
        next();
      }
    }).catch(err => next(err));


  })

}

function canAcessResource(userId, url) {
  return true;
}

//DELTE THIS
function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, sa ve to request for use in other routes      
    req.userId = decoded.id;
    next();
  });
}

module.exports = {
  verifyToken: verifyToken,
  validateRequest, validateRequest,
  registerUser, registerUser,
  authenticateUser, authenticateUser
}