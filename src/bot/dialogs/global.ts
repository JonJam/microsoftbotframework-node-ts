import { Library, Session } from "botbuilder";
import strings from "../../strings";

const lib = new Library("global");

lib
  .dialog("help", (session: Session) => {
    session.endDialog(strings.global.help.message);
  })
  .triggerAction({
    // LUIS intent
    matches: "global:help"
  });

export default lib;
