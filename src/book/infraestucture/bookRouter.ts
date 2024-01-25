import express from 'express';
import { addBookController, getBookController, updateBookController } from './dependencies';

export const bookRouter = express.Router();


bookRouter.post('/post', addBookController.run.bind(addBookController));

bookRouter.get('/', getBookController.run.bind(getBookController));

bookRouter.put('/put', updateBookController.run.bind(updateBookController))