const User = require('../models/user');
const Budget = require('../models/budget');
const Category = require('../models/category')
const jwt = require('jsonwebtoken')


module.exports = {
    index,
    create,
    show
}

async function index(budgetId, token){
    const budget = await Budget.findById(budgetId).populate('categories')
    return budget
}


async function create(categoryParam, budgetId) {
    console.log(categoryParam)
    console.log(budgetId)
    const category = new Category(categoryParam);
    const budget = await Budget.findByIdAndUpdate(
        budgetId, 
        {$push: {categories: category}},
        {new: true, useFindAndModify: false}
    )
    await budget.save()
    category.budget = budgetId
    await category.save()
    return category
}

async function show(categoryId){
    const category = await Category.findById(categoryId)
    if (category){
        return category
    }
}