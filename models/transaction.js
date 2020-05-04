mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    description: {type: "string", required: true},
    amount: {type: 'Number', required: true},
    date: {type: 'Date', default: Date.now}
})

module.exports = mongoose.model("Transaction", transactionSchema);
