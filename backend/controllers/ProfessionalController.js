const Professional = require('../models/Professional')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

module.exports = {
    async read(req, res){
        const list = await Professional.find()
        return res.json(list)
    },

    async findByEmail(){
        const {email} = req.params
        const professional = await Professional.findOne({email : email})
        if(!professional){
            return res.status(404).json({ msg: "user not found"})
        }
        return res.json(professional);
    },


    async create(req,res){
        const {name,email,cpf,description,phone,branch,rating,password} = req.body
        if(!name || !email || !cpf || !description || !phone || !phone || !branch || !password){
            return res.status(400).json({ error: "missing information!" });
        }
        let passwordHash = bcrypt.hashSync(password,5)
        const ConstumerCreated = await Professional.create({
            name,
            email,
            cpf,
            description,
            phone,
            branch,
            rating,
            passord: passwordHash
        })
        return res.json(ConstumerCreated)
    },
    async delete(req,res){
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Costumer not found"})
        }
        const ProfessionalDeleted = await Professional.findOneAndDelete({_id:id})
        return res.json(ProfessionalDeleted)
    },
    async login(req,res){
        const {email, password} = req.body
        const professional = await Professional.findOne({email:email})
        if (!professional) {
            return res.status(404).json({ msg: "User not found" })
        }
        if(!await bcrypt.compare(password, professional.password)){
            return res.status(200).json({ result: false });
        }
        return res.status(200).json({ result: true });


    }
}