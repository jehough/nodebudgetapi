const User = require("./models/user")
const Budget = require("./models/budget")
const Category = require("./models/category")
const Transaction = require("./models/transaction")


async function createSeeds(){
    const user = await User.findOne({email: "sample@sample.com"})
    if (!user) {
        const newUser = new User(
            {email: "sample@sample.com",
            password: "password",
            role: "admin"
            }
        );
        newUser.save();
        const budget = new Budget(
            {name: "myBudget",
            available: 1000,
            user: newUser
            }
        )
        budget.save();
        
    } 

}

async function printUser(){
    await User.findOne({email: "sample@sample.org"}).populate('budgets')
        .then(user => console.log(user))
    await Budget.findOne({name: 'myBudget'}).populate("user")
        .then(budget => console.log(budget))
}
createSeeds()
printUser()