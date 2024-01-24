import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase{
    constructor (readonly bookRepository: BookRepository){}
    async run(name: string, autor: string, estado:boolean): Promise<Book | null>{
        try{
            const createdBook = await this.bookRepository.addBook(name, autor, estado);
            return createdBook;
        } catch(err){
            console.log("Error en AddBookUseCase>", err);
            return null;
        }
    }
}