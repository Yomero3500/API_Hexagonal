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
const getUserController_1 = require("./getUserController");
describe('GetUserController', () => {
    it('debería devolver un usuario existente', () => __awaiter(void 0, void 0, void 0, function* () {
        // Crea un objeto simulado para Reqest y Response
        const req = {
            body: {
                id: 1, // ID del usuario que deseas buscar
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
        // Crea un objeto simulado para GetUserUseCase
        const getUserUseCase = {
            run: jest.fn().mockResolvedValue({
                name: "John",
                last_name: "Doe",
            }),
        };
        // Crea una instancia del controlador con los objetos simulados
        const controller = new getUserController_1.GetUserController(getUserUseCase);
        // Ejecuta el método run() del controlador
        yield controller.run(req, res);
        // Verifica que se haya llamado a res.status() con el código 200
        expect(res.status).toHaveBeenCalledWith(200);
        // Verifica que se haya llamado a res.send() con los datos del usuario
        expect(res.send).toHaveBeenCalledWith({
            status: "success",
            data: {
                name: "John",
                last_name: "Doe",
            },
            message: "Usuario encontrado",
        });
    }));
});
