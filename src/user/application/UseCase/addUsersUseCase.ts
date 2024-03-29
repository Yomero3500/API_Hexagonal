import {User} from '../../domain/user'
import {UserRepository} from '../../domain/usersRepository';
import { BcryptHelper } from '../../infraestructure/helpers/bcryptHelper';
import { NotificationHelpers } from '../../infraestructure/helpers/NotificationHelper';

export class AddUserUseCase{
    constructor (readonly userRepository: UserRepository, readonly bcryptHelper: BcryptHelper, readonly  notificationHelpers: NotificationHelpers) {}
    async run(name: string, last_name: string, password: string): Promise<User | null>{
        try{
            const hashedPassword = await this.bcryptHelper.encryptPass(password);
            const createUser = await this.userRepository.addUser(name, last_name, hashedPassword);
            this.notificationHelpers.sendNotify("Un paso mas cerca de no valer kk")
            return createUser;
        }catch(error){
            console.log("Error en AddUserUseCase" , error);
            return null;
        }
    }
}
