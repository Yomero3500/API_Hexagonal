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
const getUserUseCase_1 = require("./getUserUseCase");
describe('GetUserUseCase', () => {
    it('debería obtener un usuario existente', () => __awaiter(void 0, void 0, void 0, function* () {
        // Crea un objeto simulado para GetUserUseCase
        const getUserUseCase = new getUserUseCase_1.GetUserUseCase();
        // Ejecuta el caso de uso
        const user = yield getUserUseCase.run(1); // ID del usuario que deseas buscar
        // Verifica que se haya obtenido el usuario correcto
        expect(user).toEqual({
            name: 'John',
            last_name: 'Doe',
        });
    }));
});
