const express = require('express')
const routes = express.Router()

const CostumerController = require('./controllers/CostumerController')

routes.get('/costumer', CostumerController.read)
routes.post('/costumer', CostumerController.create)
routes.delete('/costumer/:id', CostumerController.delete)
routes.get('/costumer/find/:email',CostumerController.findByEmail)
routes.post('/costumer/auth', CostumerController.login)


const ProfessionalController = require('./controllers/ProfessionalController')

routes.get('/professional', ProfessionalController.read)
routes.post('/professional', ProfessionalController.create)
routes.delete('/professional/:id', ProfessionalController.delete)
routes.get('/professional/find/:email',ProfessionalController.findByEmail)
routes.get('/professional/auth', ProfessionalController.login)

const OrderController = require('./controllers/OrderController')

routes.get('/order/rating', OrderController.updateRating)
routes.get('/order/done', OrderController.updateStatus)
routes.post('/order', OrderController.create)
routes.get('/order/professional', OrderController.findByProfessional)
routes.get('/order/costumer', OrderController.findByCostumer)

module.exports = routes