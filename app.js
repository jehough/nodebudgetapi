const express = require('express');
const path = require('path');
const env = require('dotenv').config({path: __dirname + '/.env'});
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const url = process.env['mongooseURL'];
const cors = require('cors')


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
