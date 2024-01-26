import { Book } from "../domain/books";
import { BookRepository } from "../domain/booksRepository";

export class AddBookUseCase{
    constructor (readonly bookRepository: BookRepository){}
    async run(name: string, autor: string, estado:boolean): Promise<Book | null>{
        try{
            const createdBook = await this.bookRepository.addBook(name, autor, estado);
            return createdBook;
        } catch(err){
            console.log("Error en AddBookUseCase:", err);
            return null;
        }
    }
}