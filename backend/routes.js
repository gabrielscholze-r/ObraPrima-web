const express = require('express')
const routes = express.Router()

const CostumerController = require('./controllers/CostumerController')

routes.get('/costumer', CostumerController.read)
routes.post('/costumer', CostumerController.create)
routes.delete('/costumer/:id', CostumerController.delete)
routes.get('/costumer/find/:email',CostumerController.findByEmail)
routes.get('/costumer/auth', CostumerController.login)


const ProfessionalController = require('./controllers/ProfessionalController')

routes.get('/professioal', ProfessionalController.read)
routes.post('/professioal', ProfessionalController.create)
routes.delete('/professioal/:id', ProfessionalController.delete)
routes.get('/professioal/find/:email',ProfessionalController.findByEmail)
routes.get('/professioal/auth', ProfessionalController.login)

module.exports = routes