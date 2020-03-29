const express = require('express')

const OngsController = require('./controlers/OngsController')
const IncidentController = require('./controlers/IncidentController')
const ProfileController = require('./controlers/ProfileController')
const SessionController = require('./controlers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsController.read)
routes.post('/ongs', OngsController.create)

routes.get('/profile', ProfileController.read)

routes.get('/incidents', IncidentController.read)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)




module.exports = routes