require('dotenv').config()
require('./config/dbConfig')
const express = require('express');
const cors = require('cors');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")
const app = express();

// app.get('/Login', (req,res)=>{
//     res.status(200).json({msg: "bem vindo"})
// })

app.use(express.json())
const routes = require('./routes')
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: '200'
}
app.use(cors(corsOptions))

const port = 8080;
app.use(routes)

app.listen(port, () =>{console.log("rodando porta 8080")});