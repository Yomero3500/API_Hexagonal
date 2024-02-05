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
exports.AddUserController = void 0;
const bcrypt_1 = require("bcrypt");
class AddUserController {
    constructor(addUserUseCase) {
        this.addUserUseCase = addUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, last_name, password } = req.body;
                const salt = (0, bcrypt_1.genSaltSync)(10);
                const hashedPassword = (0, bcrypt_1.hashSync)(password, salt);
                let createdUser = yield this.addUserUseCase.run(name, last_name, hashedPassword);
                if (createdUser) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            name: createdUser.name,
                            last_name: createdUser.last_name,
                            password: createdUser.password
                        },
                        message: " Usuario creado"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "Error",
                        data: [],
                        message: "Error al Crear Usuario"
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
exports.AddUserController = AddUserController;
