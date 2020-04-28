mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: "string", required: true, unique: true},
    password: {type: "string", required: true},
    role: "string",
    Created_on: {type: Date, default: Date.now},
    Updated_on: {type: Date}
})

module.exports = mongoose.model("User", userSchema)