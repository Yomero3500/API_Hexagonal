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
exports.PgsqUserRepository = void 0;
const user_1 = require("../domain/user");
const userModel_1 = __importDefault(require("./model/userModel"));
class PgsqUserRepository {
    addUser(name, last_name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield userModel_1.default.create({ name, last_name });
                return new user_1.User(createdUser.id, createdUser.name, createdUser.last_name);
            }
            catch (error) {
                console.log("Error en Pgsq agregarUser>", error);
                return null;
            }
        });
    }
    ;
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchedUser = yield userModel_1.default.findOne({ where: { id: id } });
                if (searchedUser) {
                    return new user_1.User(searchedUser.id, searchedUser.name, searchedUser.last_name);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en Pgsq encontrarUser>", error);
                return null;
            }
        });
    }
}
exports.PgsqUserRepository = PgsqUserRepository;
