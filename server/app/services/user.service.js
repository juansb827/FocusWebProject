var User = require('./../models/nonrelational/user');

function getById(_id) {
    return User.findById(_id ,{ password: 0 }).exec()
}

module.exports={
    getById:getById
}