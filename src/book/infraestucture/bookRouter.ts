import express from 'express';
import { addBookController, getBookController } from './dependencies';

export const bookRouter = express.Router();


bookRouter.post('/post', (req,res)=>{
   try {
    addBookController.run.bind(addBookController)(req,res);
    return res.sendStatus(200);
   } catch (error) {
    console.error(error);
    return res.sendStatus(500);
   } 
});

bookRouter.get('/', (req,res)=>{
    try {
        getBookController.run.bind(getBookController)(req,res);
        return res.sendStatus(200);
    } catch (error) {
    console.error(error);
    return res.sendStatus(500);
    }
});