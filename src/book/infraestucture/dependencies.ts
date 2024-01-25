import { SqliteBookRepository } from "./sqlteBookRepository";
import { AddBookUseCase } from "../application/addBookUseCase";
import { AddBookController } from "./controller/addBookController";
import { GetBookUseCase } from "../application/getBookUseCase";
import { GetBookController } from "./controller/getBookController";
import { UpdateBookUseCase } from "../application/updateBookUseCase";
import { UpdateBookController } from "./controller/updateBookController";

export const sqliteBookRepository = new SqliteBookRepository();

export const addBookUseCase = new AddBookUseCase(sqliteBookRepository);
export const addBookController = new AddBookController(addBookUseCase);

export const getBookUseCase = new GetBookUseCase(sqliteBookRepository);
export const getBookController = new GetBookController(getBookUseCase);

export const updateBookUseCase = new UpdateBookUseCase(sqliteBookRepository);
export const updateBookController = new UpdateBookController(updateBookUseCase)

