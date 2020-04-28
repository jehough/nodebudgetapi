const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const secret = process.env["jwtsecret"]

module.exports = {
    create,
    authenticate
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

async function authenticate({email, password}){
    const user = await User.findOne({email});
    if (user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({sub: user.id}, secret);
        return {
            ...user.toJSON(),
            token
        }
    }
}