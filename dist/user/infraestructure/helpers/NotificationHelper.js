"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationHelpers = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const url = process.env.AMQP_URL;
class NotificationHelpers {
    inicializar() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url)
                return false;
            try {
                const connection = yield amqplib_1.default.connect(url);
                this.providerChannel = yield connection.createChannel();
                this.providerChannel.assertQueue("channel1");
                console.log("Conexion exitosa");
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    sendNotify(message) {
        if (this.providerChannel === undefined) {
            return false;
        }
        this.providerChannel.sendToQueue("channel1", Buffer.from(message));
        return true;
    }
}
exports.NotificationHelpers = NotificationHelpers;
