import { User } from "../models/User";
import { Notifier } from "../core/interfaces";


export class NotificationService {
 
  constructor(private notifiers: Notifier[]) {}

  notify(user: User, message: string): void {
    this.notifiers.forEach((notifier) => notifier.send(user, message));
  }
}
