import express from 'express';
import { Signale } from 'signale';
import helmet from 'helmet';

import { initialDataBase } from './database/sequelize';
import { userRouter } from './user/infraestructure/userRouter';
import { bookRouter } from './book/infraestucture/bookRouter';

const options = {
    secrets: ["([0-9]{4}-?)+"]
  };

const app = express();
const signale = new Signale(options);

app.use(helmet());
app.use(express.json());
app.use('/user', userRouter);
app.use('/book', bookRouter);

async function startServer() {
    try {
        await initialDataBase();
        app.listen(3000, () => {
            signale.success("Server online in port 3000")
        })

    } catch (error) {
        signale.error("Error al iniciar el servidor", error)
    }
}
startServer();