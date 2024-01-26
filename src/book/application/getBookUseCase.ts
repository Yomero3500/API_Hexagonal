import { Book } from "../domain/books";
import { BookRepository } from "../domain/booksRepository";

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