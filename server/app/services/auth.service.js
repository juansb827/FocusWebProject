var nconf = require('nconf');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var User = require('./../models/nonrelational/user');

var secret = nconf.get('SESSION_SECRET');

/**
 * Register an user in the db, and returns a token containing it's id
 * @param {*} password 
 */
function registerUser(name, email, password) {
  var hashedPassword = bcrypt.hashSync(password, 8);
  return User.create({
    name: name,
    email: email,
    password: hashedPassword
  }).then(user => {
    var token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    return ({ auth: true, token: token });
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
    });
}


function validateRequest(req, res, next) {
  var token = (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers['x-access-token'];

  if (!token) return res.status(403).send('No token provided');

  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    if (decoded.exp <= (Date.now() / 1000)) {
      res.status(400);
      return next("Token Expired");
    }

    const userId = decoded.id;
    req.userId = userId
       
    User.findById(userId).exec().then(user => {
      if (!user) res.status(400).send("Invalid User")
      else next();
    }).catch(err => next(err));
    

  })

}

function canAcessResource(userId, url) {
  return true;
}

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes      
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