"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBookController = void 0;
class AddBookController {
    constructor(addBookUseCase) {
        this.addBookUseCase = addBookUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, autor, status } = req.body;
                let libroCreado = yield this.addBookUseCase.run(name, autor, status);
                if (libroCreado) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            name: libroCreado.name,
                            status: libroCreado.estado,
                            autor: libroCreado.autor
                        },
                        message: "Libro Creado"
                    });
                }
                else {
                    return res.status(404).send({
                        status: "Error",
                        data: [],
                        message: "Error al Crear Un Libro"
                    });
                }
            }
            catch (error) {
                console.log("Error en BookController>", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en Server"
                });
            }
        });
    }
}
exports.AddBookController = AddBookController;
