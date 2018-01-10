import { Library } from "botbuilder";
import strings from "../../strings";
import { getFirstRun, setFirstRun } from "../data/userData";

const lib = new Library("greetings");

// Universal channel support for first run, see https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-handle-conversation-events#add-a-first-run-dialog
lib
  .dialog("firstRun", session => {
    setFirstRun(session, true);

    session.endDialog(strings.greetings.firstRun.message);
  })
  .triggerAction({
    onFindAction: (context, callback) => {
      // Only trigger if we've never seen user before
      if (!getFirstRun(context)) {
        // Return a score of 1.1 to ensure the first run dialog wins
        callback(null as any, 1.1);
      } else {
        callback(null as any, 0.0);
      }
    }
  });

lib
  .dialog("hello", session => {
    session.endDialog(strings.greetings.hello.message);
  })
  .triggerAction({
    // LUIS intent
    matches: "greetings:hello"
  });

export default lib;
