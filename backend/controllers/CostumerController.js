const Costumer = require('../models/Costumer')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

module.exports = {
    async read(req, res){
        const list = await Costumer.find()
        return res.json(list)
    },

    async findByEmail(){
        const {email} = req.params
        const user = await Costumer.findOne({email : email})
        if(!user){
            return res.status(404).json({ msg: "user not found"})
        }
        return res.json(user);
    },


    async create(req,res){
        const {name,email,cpf,phone,password} = req.body
        if(!name || !email || !cpf || !phone || !password){
            return res.status(400).json({ error: "missing information!" });
        }
        let passwordHash = bcrypt.hashSync(password,5)
        const ConstumerCreated = await Costumer.create({
            name,
            email,
            cpf,
            phone,
            password:passwordHash,
        })
        return res.json(ConstumerCreated)
    },
    async delete(req,res){
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Costumer not found"})
        }
        const CostumerDeleted = await Costumer.findOneAndDelete({_id:id})
        return res.json(CostumerDeleted)
    },
    async login(req,res){
        const {email, password} = req.body
        const costumer = await Costumer.findOne({email:email})
        if (!costumer) {
            console.log(costumer)
            return res.status(200).json({ msg: "User not found" })
        }
        if(!(await bcrypt.compare(password, costumer.password))){
            return res.status(200).json({ result: false });
        }else{
            return res.status(200).json({ result: true });
        }


    }
}