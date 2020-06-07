import express, { response, request } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//para desacoplar as rotas do arquivo principal
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();



routes.get('/items', itemsController.index);

routes.post('/points' ,pointsController.create )
routes.get('/points/:id' ,pointsController.show )
routes.get('/points' ,pointsController.index )

//index, show, create|store, update, delete|destroy
//aprender
 //Service Pattern
//Repository pattern

export default routes