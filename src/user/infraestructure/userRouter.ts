import express from 'express';
import { addUserController, getUserController } from './dependencies';

export const userRouter = express.Router();

userRouter.post('/postUser', addUserController.run.bind(addUserController));

userRouter.get('/getUser',(req, res)=> {
    try {
        getUserController.run.bind(getUserController)(req,res);
        return res.sendStatus(500);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
} );