const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

module.exports = {
    create
};

async function create(userParam) {
    if( await User.findOne({emai: userParam.email})){
        throw "Email is already registered.";
    }

    const user = new User(userParam);

    if (userParam.password){
        user.hash = bcrypt.hashSync(userParam.password, 12);
    }
    else {
        throw "Must include Password!"
    }

    await user.save();
}