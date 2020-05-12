const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/category")
const transactions = require('./transaction')

router.get('/', index)

async function index (req, res, next){
    categoryController.index(req.params.budgetId)
        .then(budget => budget ? res.json(budget): res.status(400).json({message: "No Categories"}))
        .catch(err => next(err))
}


module.exports = router