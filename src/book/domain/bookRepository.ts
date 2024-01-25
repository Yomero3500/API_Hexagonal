import { Book } from "./book";

export interface BookRepository {
    addBook(name: string, autor: string, estado: boolean): Promise<Book | null>;
    getBook(name: string): Promise<Book | null>;
    updateBook(id:number,name: string, estado: boolean): Promise<Book | null>;
}