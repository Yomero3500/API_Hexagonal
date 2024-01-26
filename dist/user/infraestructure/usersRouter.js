"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/', (req, res) => {
    dependencies_1.addUserController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});
exports.userRouter.get('/all', (req, res) => {
    dependencies_1.getAllUserController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});
exports.userRouter.get("/", (req, res) => {
    dependencies_1.getUserController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});
