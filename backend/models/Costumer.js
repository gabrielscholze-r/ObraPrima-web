const mongoose = require('mongoose')


const Costumer = new mongoose.Schema({
    name: String,
    email: String,
    cpf:String,
    phone:Number,
    password:String
},{collection:"costumer"});

module.exports = mongoose.model('costumer', Costumer);