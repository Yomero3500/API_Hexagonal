import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class UpdateBookUseCase{
    constructor(readonly bookRepository: BookRepository){}
    async run(id: number, name:string, estado: boolean):Promise<Book| null>{
        try {
            const updatedBook = await this.bookRepository.updateBook(id, name, estado);
            return updatedBook;
        } catch (error) {
            console.error("Error en UpdateBookUseCase");
            return null;
        }
    }
}