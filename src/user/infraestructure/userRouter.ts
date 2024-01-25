import express from 'express';
import { addUserController, getUserController } from './dependencies';

export const userRouter = express.Router();


userRouter.post('/postUser', addUserController.run.bind(addUserController));

userRouter.get('/getUser', getUserController.run.bind(getUserController));