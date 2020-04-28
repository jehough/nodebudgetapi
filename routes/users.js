const express = require('express');
const router = express.Router();
const userController = require("../controllers/users")

/* routers */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* callback functions*/

function register (req, res, next) {
  userController.create(req.body)
    .then(() => res.json())
    .catch(err => next(err));
}
module.exports = router;
