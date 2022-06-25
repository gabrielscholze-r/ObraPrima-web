const express = require("express");
const cors = require('cors');
const app = express()
require('./config/dbConfig')
const routes = require('./routes')

app.use(express.json())
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: '200'
}
app.use(cors(corsOptions))
app.use(routes)


app.listen(8080, () => {console.log("Listening on port 8080")})