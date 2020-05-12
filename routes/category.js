const express = require('express');
const router = express.Router({mergeParams: true});
const categoryController = require("../controllers/category")
const transactions = require('./transaction')

router.get('/', index)
router.post('/', create)

async function index (req, res, next){
    categoryController.index(req.params.budgetId)
        .then(budget => budget ? res.json(budget): res.status(400).json({message: "No Categories"}))
        .catch(err => next(err))
}

function create(req, res, next){
    categoryController.create(req.body, req.params.budgetId)
        .then(category => category? res.json(category):res.status(400).json({message: "Something Went Wrong"}))
        .catch(err => next(err))
}


module.exports = router