import express from 'express';
import { addUserController, getUserController, getAllUserController } from './dependencies';

export const userRouter = express.Router();

userRouter.post('/', addUserController.run.bind(addUserController));
userRouter.get('/', getUserController.run.bind(getUserController));
userRouter.get('/all/', getAllUserController.run.bind(getAllUserController));