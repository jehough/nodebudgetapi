mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    Title: {type: "string", required: true},
    available: {type: 'Number', default: 0},
    budget: {
        type: Schema.Types.ObjectId,
        ref: "Budget"
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: "Transaction"
    }]
})

module.exports = mongoose.model("Category", categorySchema);
