const mongoose = require('mongoose')


const Order = new mongoose.Schema({
    name: String,
    professionalID: String,
    costumerID: String,
    description:String,
    price: Number,
    done: Boolean,
    rating: Number,
    rDescription: String
},{collection:"order"});

module.exports = mongoose.model('order', Order);