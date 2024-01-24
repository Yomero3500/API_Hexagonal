"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookController = exports.getBookUseCase = exports.addBookController = exports.addBookUseCase = exports.sqliteBookRepository = void 0;
const sqlteBookRepository_1 = require("./sqlteBookRepository");
const addBookUseCase_1 = require("../application/addBookUseCase");
const addBookController_1 = require("./controller/addBookController");
const getBookUseCase_1 = require("../application/getBookUseCase");
const getBookController_1 = require("./controller/getBookController");
exports.sqliteBookRepository = new sqlteBookRepository_1.SqliteBookRepository();
exports.addBookUseCase = new addBookUseCase_1.AddBookUseCase(exports.sqliteBookRepository);
exports.addBookController = new addBookController_1.AddBookController(exports.addBookUseCase);
exports.getBookUseCase = new getBookUseCase_1.GetBookUseCase(exports.sqliteBookRepository);
exports.getBookController = new getBookController_1.GetBookController(exports.getBookUseCase);