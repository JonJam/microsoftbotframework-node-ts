import * as debug from "debug";
import { createServer } from "http";
import app from "./app";
import { port } from "./settings";

// Using debug per best practise: https://expressjs.com/en/advanced/best-practice-performance.html#do-logging-correctly
const log = debug("server");

/**
 * Get port from environment and store in Express.
 */
app.set("port", port);

// Create HTTP server.
// Workaround: Using any as the Express and createServer types are not compatible.
const server = createServer(app as any);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      log(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      log(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  log("Listening on " + bind);
}
