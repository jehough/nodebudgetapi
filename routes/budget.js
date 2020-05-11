const express = require('express');
const router = express.Router({mergeParams: true});
const budgetController = require('../controllers/budget');

/* routes */
router.get('/', index)
router.get('/:id', show)
router.post('/', create)




/* callback functions */

function index(req, res, next){
    budgetController.index(req.params.userId, req.headers.authorization)
        .then(user => user ? res.json(user): res.status(400).json({message: "No User Found"}))
        .catch(err => next(err)) 
}

function show(req, res, next){
    budgetController.show(req.params.id)
        .then(budget => budget ? res.json(budget) : res.status(400).json({message: "Budget not found"}) )
        .catch(err => next(err))
}

function create(req, res, next){
    budgetController.create(req.body, req.params.userId)
        .then(budget => budget? res.json(budget):res.status(400).json({message: "Something Went Wrong"}))
        .catch(err => next(err))
}
module.exports = router