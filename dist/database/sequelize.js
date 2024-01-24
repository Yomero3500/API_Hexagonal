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
exports.initialDataBase = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const userModel_1 = __importDefault(require("../user/infraestructure/model/userModel"));
const bookModel_1 = __importDefault(require("../book/infraestucture/model/bookModel"));
dotenv_1.default.config();
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    models: [userModel_1.default, bookModel_1.default],
});
function initialDataBase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(process.env.DB_HOST);
            yield exports.sequelize.authenticate();
            console.log('Conection established successfully');
            yield exports.sequelize.sync({ force: false });
        }
        catch (error) {
            console.log(' No se pudo conectar a la base de datos', error);
            process.exit(1);
        }
    });
}
exports.initialDataBase = initialDataBase;
