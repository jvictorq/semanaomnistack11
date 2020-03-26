const express = require('express');

const OngController = require('./controlers/OngController');
const IncidentController = require('./controlers/IncidentController');
const ProfileController = require('./controlers/ProfileController');
const SessionController = require('./controlers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;