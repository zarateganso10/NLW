import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//rotas items
routes.get('/items', itemsController.list) ;


//rotas points
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.getById);
routes.get('/points', upload.single('image'), pointsController.list);




export default routes;