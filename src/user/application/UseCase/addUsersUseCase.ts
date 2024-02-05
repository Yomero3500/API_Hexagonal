import {User} from '../../domain/user'
import {UserRepository} from '../../domain/usersRepository';
import { BcryptHelper } from '../../infraestructure/helpers/bcryptHelper';

export class AddUserUseCase{
    constructor (readonly userRepository: UserRepository, readonly bcryptHelper: BcryptHelper) {}
    async run(name: string, last_name: string, password: string): Promise<User | null>{
        try{
            const hashedPassword = await this.bcryptHelper.encryptPass(password);
            const createUser = await this.userRepository.addUser(name, last_name, hashedPassword);
            return createUser;
        }catch(error){
            console.log("Error en AddUserUseCase" , error);
            return null;
        }
    }
}