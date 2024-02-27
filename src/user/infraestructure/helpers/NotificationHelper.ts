import { INotificationService } from "../../application/services/INotificationService";
import ampqlib from "amqplib"

export class NotificationHelpers implements INotificationService {
    
    providerChannel : ampqlib.Channel | undefined;

    async inicializar() {
        try {
            const connection = await ampqlib.connect("amqp://michi:michi123@52.205.249.137");
            this.providerChannel = await connection.createChannel();
            console.log("Conexión exitosa");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    sendNotify(message: string): boolean {
        if (this.providerChannel === undefined) {
            return false;
        }
        const exchange= "maikol";
        this.providerChannel.assertExchange(exchange, 'direct', { durable: true });
        this.providerChannel.publish(exchange, '12345', Buffer.from(message));
        console.log("Mensaje enviado al exchange:",);
        return true;
    }
}