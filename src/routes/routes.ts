import { Router, Request } from 'express';

import * as HomeController from '../controllers/homeController';
import * as CategoryController from '../controllers/categoryController';
import * as TaskController from '../controllers/taskController';
import * as AuthController from '../controllers/authController';
import { Auth } from './../middlewares/auth';


const router = Router();

//user
router.get('/users', HomeController.FindAll);
router.get('/users/:id', HomeController.FindOne);
router.post('/users', HomeController.Create);
router.put('/users/:id', HomeController.Update);
router.delete('/users/:id', HomeController.Destroy);

//categories
router.get('/categories', CategoryController.FindAll);
router.get('/categories/:id', CategoryController.FindOne);
router.post('/categories', CategoryController.Create);

//tasks
router.get('/tasks', TaskController.FindAll);
router.get('/tasks/:id', TaskController.FindOne);
router.post('/tasks', TaskController.Create);
router.post('/tasks/:id', TaskController.Update);
router.delete('/tasks/:id', TaskController.Destroy);
router.put('/tasks/:id', TaskController.Check);

//auth
router.post('/login', AuthController.Login);
router.post('/register', AuthController.Register);
router.post('/request', Auth.private, AuthController.AccountREQUEST);

export default router;