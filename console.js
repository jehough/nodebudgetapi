var repl = require('repl');
const User = require("./models/user")
const Budget = require("./models/budget")
const Category = require("./models/category")
const Transaction = require("./models/transaction")
const env = require('dotenv').config({path: __dirname + '/.env'});
const mongoose = require('mongoose');
const url = process.env['mongooseURL'];

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

var replServer = repl.start({
    prompt: "Node Console>"
})

replServer.context.User = User
replServer.context.Budget = Budget
replServer.context.Category = Category
replServer.context.Transaction = Transaction

