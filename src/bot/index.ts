import { ChatConnector, LuisRecognizer, UniversalBot } from "botbuilder";
import { appId, appPassword, luisAppUrl } from "../settings";
import colour from "./dialogs/colour";
import defaultDialog from "./dialogs/default";
import global from "./dialogs/global";
import greetings from "./dialogs/greetings";
import storage from "./storage";

// Create chat connector for communicating with the Bot Framework Service
const connector = new ChatConnector({
  appId,
  appPassword
});

const bot = new UniversalBot(connector, defaultDialog);
bot.set("storage", storage);
bot.recognizer(new LuisRecognizer(luisAppUrl));
bot.library(global.clone());
bot.library(greetings.clone());
bot.library(colour.clone());

export default connector;
