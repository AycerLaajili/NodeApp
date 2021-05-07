const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

const UserModel = mongoose.model('user', userSchema)

exports.default = UserModel