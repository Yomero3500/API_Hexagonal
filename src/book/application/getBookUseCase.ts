import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class GetBookUseCase{
    constructor(readonly bookRepository: BookRepository){}
    async run(name: string): Promise<Book | null>{
        try {
            const searchedBook = await this.bookRepository.getBook(name);
            return searchedBook;
        } catch (error) {
            console.error("Error en AddBookUseCase: ", error);
            return null;
        }
    }
}