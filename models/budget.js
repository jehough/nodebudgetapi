mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema ({
    name: {type: "string", required: true},
    available: {type: 'Number', default: 0},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }]
})

module.exports = mongoose.model("Budget", budgetSchema);
