const mongoose = require('mongoose')


const Professional = new mongoose.Schema({
    name: String,
    email: String,
    cpf:String,
    description:String,
    phone:Number,
    branch: Number,
    rating: Number,
    password:String
},{collection:"professional"});

module.exports = mongoose.model('professional', Professional);