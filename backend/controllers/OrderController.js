const Order = require('../models/Order')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

module.exports = {
    async updateRating(req, res){
        const {id,rating, rDescription} = req.body
        const order = await Order.findOne({_id:id}).catch(error => {console.log(error)})
        order.rating = rating
        order.rDescription = rDescription
        await order.save()
        return re.json(order)
    },
    async updateStatus(req,res){

    }
}