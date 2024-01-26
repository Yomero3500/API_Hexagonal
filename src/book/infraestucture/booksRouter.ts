import express from 'express';
import { addBookController, getBookController } from './dependencies';

export const bookRouter = express.Router();

bookRouter.post('/',(req, res) => {
    addBookController.run(req, res)
    .then(() => {
        return null;
       })
       .catch(error => {
         console.error(error);
         res.status(500).send('Internal Server Error');
       });
});

bookRouter.get('/', (req, res) =>{
    getBookController.run(req, res)
    .then(() => {
        return null;
       })
       .catch(error => {
         console.error(error);
         res.status(500).send('Internal Server Error');
       });
} );
