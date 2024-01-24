import {Request, Response} from "express";
import { AddUserUseCase } from "../../application/addUserUseCase";

export class AddUserController{
    constructor( readonly addUserUseCase: AddUserUseCase){}
    async run (req: Request, res: Response){
        try {
            let {name, last_name} = req.body;
            let createdUser = await this.addUserUseCase.run(name, last_name);
            
            if (createdUser){
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: createdUser.name,
                        last_name: createdUser.last_name
                    },
                    message:" Usuario creado"
                })
            }else{
                return res.status(400).send({
                    status: "Error",
                    data: [],
                    message: "Error al Crear Usuario"
                }) 
            }
        } catch (error) {
            console.log("Error en userController add>",error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}