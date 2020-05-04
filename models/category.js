mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    Title: {type: "string", required: true},
    available: {type: 'Number', default: 0},
    
})

module.exports = mongoose.model("Transaction", transactionSchema);
