const express = require('express');
const router = express.Router();
const userController = require("../controllers/users")

/* routers */
router.get('/', function(req, res, next) {
  userController.index()
    .then(users => users? res.json(users):res.status(400).json({message: 'what?'}))
    .catch(err => next(err))
});
router.post('/', register)
router.post('/login', authenticate)
router.post('/changePassword', changePassword)
router.get('/:id', show)


/* callback functions*/

function register (req, res, next) {
  userController.create(req.body)
    .then(user => user? res.json(user):res.status(400).json({message: 'Name is taken'}))
    .catch(err => next(err));
}

function authenticate (req, res, next) {
  userController.authenticate(req.body)
    .then(user => user? res.json(user):res.status(400).json({message: 'Username or Password is incorrect.'}))
    .catch(err => next(err))
}

function changePassword (req, res, next) {
  userController.changePassword(req.body)
    .then(user=> user ? res.json(user): res.status(400).json({message: 'Username or Password is incorrect.'}))
}

function show (req, res, next){
  userController.show
}

module.exports = router;
