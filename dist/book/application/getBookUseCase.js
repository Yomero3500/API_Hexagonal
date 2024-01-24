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
exports.GetBookUseCase = void 0;
class GetBookUseCase {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    run(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchedBook = yield this.bookRepository.getBook(name);
                return searchedBook;
            }
            catch (error) {
                console.error("Error en AddBookUseCase: ", error);
                return null;
            }
        });
    }
}
exports.GetBookUseCase = GetBookUseCase;
