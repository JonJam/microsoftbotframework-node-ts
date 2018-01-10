import { Session } from "botbuilder";
import strings from "../../strings";

// https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-overview#default-dialog
// Called whenever the dialog stack is empty and no other dialog triggered.
export default [
  (session: Session) => {
    session.endDialog(strings.default.message);
  }
];
