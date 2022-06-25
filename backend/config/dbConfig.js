require('dotenv').config()
const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const dbConfig =`mongodb+srv://${dbUser}:${dbPassword}@cluster0.rbzm5.mongodb.net/ObraPrima?retryWrites=true&w=majority`
// mongodb+srv://${dbUser}:${dbPassword}@cluster0.rbzm5.mongodb.net/?retryWrites=true&w=majority
const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log("connected to DB."))
.catch( err => console.log(err));
module.exports = connection;