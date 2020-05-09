
const User = require('../models/user');
const Budget = require('../models/budget');


module.exports = {
    index,
    create
}

async function index(userId){
    const user = await User.findOne({_id: userId}).populate('budgets');
    return user
}


async function create(userParam) {
    const budget = new Budget(budgetParam);
    budget.save()
    return budget
}