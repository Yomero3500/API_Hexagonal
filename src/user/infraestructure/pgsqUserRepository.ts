import {User} from '../domain/user'
import { UserRepository } from '../domain/userRepository'
import UserModel from './model/userModel'

export class PgsqUserRepository implements UserRepository{

    async addUser(name: string, last_name: string): Promise<User | null>{
        try {
            const createdUser = await UserModel.create({name, last_name});
            return new User(createdUser.id ,createdUser.name, createdUser.last_name);
        } catch (error) {
            console.log("Error en Pgsq agregarUser>",error);
            return null;
        }
    };

    async getUser(id: number): Promise<User | null> {
        try {
            const searchedUser = await UserModel.findOne({where:{ id: id}})
            if (searchedUser) {
                return new User(searchedUser.id , searchedUser.name, searchedUser.last_name);
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error en Pgsq encontrarUser>",error);
            return null;
        }
    }
} 