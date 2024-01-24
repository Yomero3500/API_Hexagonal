import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";
import BookModel from "./model/bookModel";

export class SqliteBookRepository implements BookRepository {

    async addBook(name: string, autor: string, estado: boolean): Promise<Book | null> {
        try {
            console.log(name, autor, estado);
            const libroCreado = await BookModel.create({name, autor, estado});
            return new Book(libroCreado.id,libroCreado.name, libroCreado.autor, libroCreado.estado)
        } catch (error) {
            console.log("Error en Sqlite agregarBook> " , error);
            return null;
        }
    }

    async getBook(name: string): Promise<Book | null> {
        try {
            console.log(name);
            const libroCreado = await BookModel.findOne({where: {name: name}});
            if (libroCreado) {
                return new Book(libroCreado.id, libroCreado.name, libroCreado.autor, libroCreado.estado)
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error en Sqlite obtenerBook> " , error);
            return null;
        }
    }
}