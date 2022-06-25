const express = require('express')
const routes = express.Router()

const CostumerController = require('./controllers/CostumerController')

routes.get('/costumer', CostumerController.read)
routes.post('/costumer', CostumerController.create)
routes.delete('/costumer/:id', CostumerController.delete)
routes.get('/costumer/find/:email',CostumerController.findByEmail)
routes.get('/costumer/auth', CostumerController.login)

module.exports = routes