import express from 'express';

const routes = express.Router();

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.store);
routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.store);


export default routes;
