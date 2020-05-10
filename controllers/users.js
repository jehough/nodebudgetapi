const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const secret = process.env["jwtsecret"]

module.exports = {
    create,
    authenticate,
    index
}

async function index(){
    const users = await User.find().populate('budgets');
    return users
}

async function create(userParam) {
    if( await User.findOne({emai: userParam.email})){
        throw "Email is already registered.";
    }

    const user = new User(userParam);

    if (userParam.password){
        user.password = bcrypt.hashSync(userParam.password, 12);
    }
    else {
        throw "Must include Password!"
    }

    await user.save();
    const token = jwt.sign({sub: user.id}, secret);
    
    return {
        ...user.toJSON(),
        token
    }
}

async function authenticate({email, password}){
    const user = await User.findOne({email}).select(+password);

    if (user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({sub: user.id}, secret);
        return {
            ...user.toJSON(),
            token
        }
    }
}

async function changePassword({email, password, newPassword}){
    const user = await User.findOne({email});
    if (user && bcrypt.compareSync(password, user.password)){
        user.password = newPassword
        user.save();
    }
    return {
        ...user.toJSON()
    }
}