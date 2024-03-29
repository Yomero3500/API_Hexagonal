import {Request, Response} from "express";
import { GetBookUseCase } from "../../application/getBookUseCase";

export class GetBookController {
    constructor(readonly getBookUseCase: GetBookUseCase){}
    async run(req: Request, res: Response){
        try {
            let {name} = req.body;
            let searchedBook = await this.getBookUseCase.run(name);

            if (searchedBook) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: searchedBook.name,
                        autor: searchedBook.autor,
                        estado: searchedBook.estado
                    },
                    message:" Libro encontrado"
                })
            } else {
                return res.status(400).send({
                    status: "Error",
                    data: [],
                    message: "Error al Encontrar un Libro"
                }) 
            }
        } catch (error) {
            console.log("Error en bookController",error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}