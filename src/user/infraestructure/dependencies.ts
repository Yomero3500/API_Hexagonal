import { PgsqUserRepository } from "./sqlteUsersRepository";
import { AddUserUseCase } from "../application/UseCase/addUsersUseCase";
import { AddUserController } from "./controller/addUsersController";
import { GetUserUseCase } from "../application/UseCase/getUsersUseCase";
import { GetUserController } from "./controller/getUsersController";
import { GetAllUsersUseCase } from "../application/UseCase/getAllUsersUseCase";
import { GetAllUserController } from "./controller/getAllUsersController";
import { BcryptHelper } from "./helpers/bcryptHelper";
import { NotificationHelpers } from "./helpers/NotificationHelper";

export const pgsqUserRepository= new PgsqUserRepository();

export const notificationsHelpers = new NotificationHelpers();
notificationsHelpers.inicializar(); 

export const bcryptHelper = new BcryptHelper();

export const addUserUseCase = new AddUserUseCase(pgsqUserRepository, bcryptHelper, notificationsHelpers);
export const addUserController = new AddUserController(addUserUseCase);

export const getUserUseCase = new GetUserUseCase(pgsqUserRepository);
export const getUserController = new GetUserController(getUserUseCase);

export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);

