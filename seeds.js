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


createSeeds()
