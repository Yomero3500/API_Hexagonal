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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/postUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.addUserController.run(req, res);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error en la creación de usuario');
        return null;
    }
}));
exports.userRouter.get('/getUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dependencies_1.getUserController.run(req, res);
    }
    catch (error) {
        res.status(500).send('Error en la busqueda del usuario');
        return null;
    }
}));
