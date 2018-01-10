import { IBotStorage, MemoryBotStorage } from "botbuilder";
import { AzureBotStorage, AzureTableClient } from "botbuilder-azure";
import {
  storageAccountKey,
  storageAccountName,
  tableName
} from "../../settings";

let storage: IBotStorage;

if (process.env.NODE_ENV !== "production") {
  // In development, use in memory data storage.
  storage = new MemoryBotStorage();
} else {
  // In production, use Table Storage.
  const tableClient = new AzureTableClient(
    tableName,
    storageAccountName,
    storageAccountKey
  );
  storage = new AzureBotStorage({ gzipData: false }, tableClient);
}

export default storage;
