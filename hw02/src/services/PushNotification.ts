// TODO: Implement the PushNotification class
import { Notifier, ILogger } from "../core/interfaces";

export class PushNotification implements Notifier {
    constructor (private logger: ILogger) {}

    send(user: { deviceToken: string }, message: string): void {
        this.logger.log (`Sending PUSH to ${user.deviceToken}`);
        console.log (`Push  sent to ${user.deviceToken}: ${message}`);
    }
}