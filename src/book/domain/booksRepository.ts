import { Book } from "./books";

export interface BookRepository {
    addBook(name: string, autor: string, estado: boolean): Promise<Book | null>;
    getBook(name: string): Promise<Book | null>;
}