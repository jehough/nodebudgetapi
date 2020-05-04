mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    description: {type: "string", required: true},
    amount: {type: 'Number', required: true},
    date: {type: 'Date', default: Date.now},
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model("Transaction", transactionSchema);
