import express from 'express';
import { addUserController, getUserController } from './dependencies';

export const userRouter = express.Router();

userRouter.post("/postUser", (req, res) => {
    try {
        addUserController.run.bind(addUserController)(req, res);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});

userRouter.get("/getUser", (req, res) => {
    try {
        getUserController.run.bind(getUserController)(req, res);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});