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
exports.GetBookController = void 0;
class GetBookController {
    constructor(getBookUseCase) {
        this.getBookUseCase = getBookUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name } = req.body;
                let searchedBook = yield this.getBookUseCase.run(name);
                if (searchedBook) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            name: searchedBook.name,
                            autor: searchedBook.autor,
                            estado: searchedBook.estado
                        },
                        message: " Libro encontrado"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "Error",
                        data: [],
                        message: "Error al Encontrar un Libro"
                    });
                }
            }
            catch (error) {
                console.log("Error en bookController", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en Server"
                });
            }
        });
    }
}
exports.GetBookController = GetBookController;
