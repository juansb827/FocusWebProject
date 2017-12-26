var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var appError= require('./../utils/error').appError
var errorTypes= require('./../utils/error').errorTypes;

var User = require('./../models/nonrelational/user');
var nconf = require('nconf');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var authService = require('./../services/auth.service')
var userService = require('./../services/user.service')

const secret = nconf.get('SESSION_SECRET');
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/register', function (req, res) {
    authService.registerUser(req.body.name, req.body.email, req.body.password)
        .then(data => res.status(200).send(data))
        .catch(err => {
            next(new appError(errorTypes.SERVER_ERROR,"There was a problem registering the user",true,err));           
        });
});

//GETS THE USER ASSOCIATED WITH THE GIVEN TOKEN
router.get('/me', authService.verifyToken, function (req, res) {
    userService.getById(req.userId).then(user => {
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    })
        .catch(err => {
            if (err) return res.status(500).send(err);
        })
});


router.post('/login', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password)
        next(new appError(errorTypes.WRONG_CREDENTIALS,'Username or password is incorrect',true))
      
    authService.authenticateUser(email, password)
        .then(user => {
            if (user) return res.status(200).send(user);
            next(new appError(errorTypes.WRONG_CREDENTIALS,'Username or password is incorrect',true))
        })
        .catch(err => next(err));

});


module.exports = router;