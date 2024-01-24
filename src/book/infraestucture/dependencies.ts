import { SqliteBookRepository } from "./sqlteBookRepository";
import { AddBookUseCase } from "../application/addBookUseCase";
import { AddBookController } from "./controller/addBookController";
import { GetBookUseCase } from "../application/getBookUseCase";
import { GetBookController } from "./controller/getBookController";

export const sqliteBookRepository = new SqliteBookRepository();

export const addBookUseCase = new AddBookUseCase(sqliteBookRepository);
export const addBookController = new AddBookController(addBookUseCase);

export const getBookUseCase = new GetBookUseCase(sqliteBookRepository);
export const getBookController = new GetBookController(getBookUseCase);

