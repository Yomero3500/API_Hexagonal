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
exports.SqliteBookRepository = void 0;
const books_1 = require("../domain/books");
const bookModel_1 = __importDefault(require("./model/bookModel"));
class SqliteBookRepository {
    addBook(name, autor, estado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(name, autor, estado);
                const libroCreado = yield bookModel_1.default.create({ name, autor, estado });
                return new books_1.Book(libroCreado.id, libroCreado.name, libroCreado.autor, libroCreado.estado);
            }
            catch (error) {
                console.log("Error en Sqlite agregarBook> ", error);
                return null;
            }
        });
    }
    getBook(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libroCreado = yield bookModel_1.default.findOne({ where: { name: name } });
                if (libroCreado) {
                    return new books_1.Book(libroCreado.id, libroCreado.name, libroCreado.autor, libroCreado.estado);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error("Error en Sqlite obtenerBook> ", error);
                return null;
            }
        });
    }
}
exports.SqliteBookRepository = SqliteBookRepository;
