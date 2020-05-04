const express = require('express');
const router = express.Router();
const userController = require("../controllers/users")

/* routers */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', register)
router.post('/login', authenticate)
router.post('/changePassword', changePassword)


/* callback functions*/

function register (req, res, next) {
  userController.create(req.body)
    .then(() => res.json({}))
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

module.exports = router;
