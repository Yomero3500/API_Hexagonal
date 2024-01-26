"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.post('/', (req, res) => {
    dependencies_1.addBookController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});
exports.bookRouter.get('/', (req, res) => {
    dependencies_1.getBookController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});
