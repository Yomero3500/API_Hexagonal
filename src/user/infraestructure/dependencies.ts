import { PgsqUserRepository } from "./pgsqUserRepository";
import { AddUserUseCase } from "../application/addUserUseCase";
import { AddUserController } from "./controller/addUserController";
import { GetUserUseCase } from "../application/getUserUseCase";
import { GetUserController } from "./controller/getUserController";

export const pgsqUserRepository= new PgsqUserRepository();
export const addUserUseCase = new AddUserUseCase(pgsqUserRepository);
export const addUserController = new AddUserController(addUserUseCase);

export const getUserUseCase = new GetUserUseCase(pgsqUserRepository);
export const getUserController = new GetUserController(getUserUseCase);