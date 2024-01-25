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
exports.UpdateBookController = void 0;
class UpdateBookController {
    constructor(updateBookUseCase) {
        this.updateBookUseCase = updateBookUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id, name, estado } = req.body;
                let updatedBook = yield this.updateBookUseCase.run(id, name, estado);
                if (updatedBook) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            name: updatedBook.name,
                            autor: updatedBook.autor,
                            estado: updatedBook.estado
                        },
                        message: " Libro actualizado de estado"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "Error",
                        data: [],
                        message: "Error al Actualizar un Libro"
                    });
                }
            }
            catch (error) {
                console.log("Error en Update BookController", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en Server"
                });
            }
        });
    }
}
exports.UpdateBookController = UpdateBookController;
