import { IPromptChoiceResult, Library, ListStyle, Prompts } from "botbuilder";
import { format } from "util";
import strings from "../../strings";
import { getColour, setColour } from "../data/userData";

const lib = new Library("colour");

lib
  .dialog("setFavourite", [
    session => {
      session.sendTyping();

      Prompts.choice(
        session,
        strings.colour.setFavourite.prompt,
        strings.colour.setFavourite.colours,
        {
          listStyle: ListStyle.auto,
          retryPrompt: strings.colour.setFavourite.retryPrompt
        }
      );
    },
    async (session, result: IPromptChoiceResult) => {
      // Removing undefined as choice prompt will ensure value.
      const chosenColor = result.response!.entity;

      setColour(session, chosenColor);

      const message = format(
        strings.colour.setFavourite.selection,
        chosenColor
      );

      session.endDialog(message);
    }
  ])
  .triggerAction({
    // LUIS intent
    matches: "colour:setFavourite"
  });

lib
  .dialog("getFavourite", [
    session => {
      session.sendTyping();

      const chosenColor = getColour(session);

      let message = strings.colour.getFavourite.noFavourite;

      if (chosenColor !== undefined) {
        message = format(strings.colour.getFavourite.favourite, chosenColor);
      }

      session.endDialog(message);
    }
  ])
  .triggerAction({
    // LUIS intent
    matches: "colour:getFavourite"
  });

export default lib;
