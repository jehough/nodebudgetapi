
const User = require('../models/user');
const Budget = require('../models/budget');


module.exports = {
    index,
    create
}

async function index(userId){
    const user = await User.findById(userId).populate('budgets')
    return user
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

