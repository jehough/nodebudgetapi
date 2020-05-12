
const User = require('../models/user');
const Budget = require('../models/budget');
const jwt = require('jsonwebtoken')


module.exports = {
    index,
    create,
    show
}

async function index(userId, token){
    const user = await User.findById(userId).populate('budgets')
    if (token === user.token){
    return user}
}


async function create(budgetParam, userId) {
    const budget = new Budget(budgetParam);
    const user = await User.findByIdAndUpdate(
        userId, 
        {$push: {budgets: budget}},
        {new: true, useFindAndModify: false}
    )
    await user.save()
    budget.user = userId
    await budget.save()
    return budget
}

async function show(budgetId){
    const budget = await Budget.findById(budgetId).populate("categories")
    if (budget){
        return budget
    }
}