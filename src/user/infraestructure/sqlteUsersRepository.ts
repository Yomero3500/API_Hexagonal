import {User} from '../domain/user'
import { UserRepository } from '../domain/usersRepository'
import UserModel from './model/userModel'

export class PgsqUserRepository implements UserRepository{

    async addUser(name: string, last_name: string, password: string): Promise<User | null>{
        try {
            const createdUser = await UserModel.create({name, last_name, password});
            return new User(createdUser.id ,createdUser.name, createdUser.last_name, createdUser.password);
        } catch (error) {
            console.log("Error en Sqlte agregarUser>",error);
            return null;
        }
    };

    async getUser(id: number): Promise<User | null> {
        try {
            const searchedUser = await UserModel.findOne({where:{ id: id}})
            if (searchedUser) {
                return new User(searchedUser.id , searchedUser.name, searchedUser.last_name, searchedUser.password);
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error en Pgsq encontrarUser>",error);
            return null;
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            let users = await UserModel.findAll();
            return users.map(
                (user) =>
                new User(
                    user.id,
                    user.name,
                    user.last_name,
                    user.password
                )
            )
        } catch (error) {
            return [];
        }
    }
} 