"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/postUser", (req, res) => {
    try {
        dependencies_1.addUserController.run.bind(dependencies_1.addUserController)(req, res);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});
exports.userRouter.get("/getUser", (req, res) => {
    try {
        dependencies_1.getUserController.run.bind(dependencies_1.getUserController)(req, res);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});
