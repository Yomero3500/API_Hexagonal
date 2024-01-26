import { PgsqUserRepository } from "./sqlteUsersRepository";
import { AddUserUseCase } from "../application/addUsersUseCase";
import { AddUserController } from "./controller/addUsersController";
import { GetUserUseCase } from "../application/getUsersUseCase";
import { GetUserController } from "./controller/getUsersController";
import { GetAllUsersUseCase } from "../application/getAllUsersUseCase";
import { GetAllUserController } from "./controller/getAllUsersController";


export const pgsqUserRepository= new PgsqUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqUserRepository);
export const addUserController = new AddUserController(addUserUseCase);

export const getUserUseCase = new GetUserUseCase(pgsqUserRepository);
export const getUserController = new GetUserController(getUserUseCase);


export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);

