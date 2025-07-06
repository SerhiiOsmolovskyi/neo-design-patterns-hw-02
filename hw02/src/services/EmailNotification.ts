// TODO: Implement the EmailNotification class
import { Notifier, ILogger } from "../core/interfaces";

export class EmailNotification implements Notifier {
    constructor (private logger: ILogger) {}

    send(user: { email: string }, message: string): void {
        this.logger.log (`Sending EMAIL to ${user.email}`);
        console.log (`Email sent to ${user.email}: ${message}`);
    }
}