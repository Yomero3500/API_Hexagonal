import express from 'express';
import { addUserController, getUserController } from './dependencies';


export const userRouter = express.Router();

userRouter.post('/postUser', async (req, res) => {
    try {
      await addUserController.run(req, res);
    } catch (error) { 
      console.error(error);
      res.status(500).send('Error en la creación de usuario');
      return null;
    }
  });

userRouter.get('/getUser', async (req, res) => {
  try {
    await getUserController.run(req, res);
  } catch (error) {
    res.status(500).send('Error en la busqueda del usuario');
    return null;
  }
})