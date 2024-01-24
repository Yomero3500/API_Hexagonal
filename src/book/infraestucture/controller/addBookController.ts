import {Request, Response} from "express";
import { AddBookUseCase } from "../../application/addBookUseCase";

export class AddBookController{
    constructor(readonly addBookUseCase: AddBookUseCase){}
    async run(req: Request, res: Response){
        try {
            let {name, autor, status} = req.body;
            let libroCreado = await this.addBookUseCase.run(name, autor, status);

            if (libroCreado) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: libroCreado.name,
                        status: libroCreado.estado,
                        autor: libroCreado.autor
                    },
                    message: "Libro Creado"
                })
            } else {
                return res.status(404).send({
                    status: "Error",
                    data: [],
                    message: "Error al Crear Un Libro"
                })
            }
        } catch (error) {
            console.log("Error en BookController>", error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}