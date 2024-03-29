"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.post('/post', dependencies_1.addBookController.run.bind(dependencies_1.addBookController));
exports.bookRouter.get('/', dependencies_1.getBookController.run.bind(dependencies_1.getBookController));
exports.bookRouter.put('/put', dependencies_1.updateBookController.run.bind(dependencies_1.updateBookController));
