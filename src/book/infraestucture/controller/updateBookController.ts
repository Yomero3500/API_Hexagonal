import {Request, Response} from "express";
import { UpdateBookUseCase } from "../../application/updateBookUseCase";

export class UpdateBookController{
    constructor(readonly updateBookUseCase: UpdateBookUseCase){}
    async run(req: Request, res: Response){
        try {
            let {id, name, estado} = req.body;
            let updatedBook = await this.updateBookUseCase.run(id, name, estado);

            if (updatedBook) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: updatedBook.name,
                        autor: updatedBook.autor,
                        estado: updatedBook.estado
                    },
                    message:" Libro actualizado de estado"
                })
            } else {
                return res.status(400).send({
                    status: "Error",
                    data: [],
                    message: "Error al Actualizar un Libro"
                }) 
            }
        } catch (error) {
            console.log("Error en Update BookController",error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}