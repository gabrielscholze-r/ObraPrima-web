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
        return res.json(order)
    },
    async updateStatus(req,res){
        const {id} = req.body
        const order = await Order.findOne({_id:id}).catch(error => {console.log(error)})
        order.done = true
        await order.save()
        return res.json(order)
    },
    async create(req, res){
        const {name,professionalID,costumerID,description,price,done,rating, rDescription} = req.body
        if(!name || !professionalID || !costumerID || !description || !price || !done || !rating || !rDescription){
            return res.status(400).json({ error: "missing information!" });
        }
        const newOrder = Order.create({
            name,
            professionalID,
            costumerID,
            description,
            price,
            done,
            rating,
            rDescription
        })
        return res.json(newOrder)

        /*
        name: String,
    professionalID: String,
    costumerID: String,
    description:String,
    price: Number,
    done: Boolean,
    rating, Number,
    rDescription: String*/ 
    },
    async findByCostumer(req,res){
        const {costumerID} = req.body
        const OrderList = await Order.find({costumerID: costumerID})
        return res.json(OrderList)
    },
    async findByProfessional(req,res){
        const {professionalID} = req.body
        const OrderList = await Order.find({professionalID: professionalID})
        return res.json(OrderList)
    }
}