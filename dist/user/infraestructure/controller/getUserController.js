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
exports.GetUserController = void 0;
class GetUserController {
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.body;
                let searchedUser = yield this.getUserUseCase.run(id);
                if (searchedUser) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            name: searchedUser.name,
                            last_name: searchedUser.last_name
                        },
                        message: " Usuario encontrado"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "Error",
                        data: [],
                        message: "Error al Encontrar Usuario"
                    });
                }
            }
            catch (error) {
                console.log("Error en userController", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en Server"
                });
            }
        });
    }
}
exports.GetUserController = GetUserController;
