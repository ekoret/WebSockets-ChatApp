import ChatControlsManager from "./ChatControlsManager.js";
import SocketClient from "./SocketClient.js";
import StateManager from "./StateManager.js";
import User from "./User.js";
import { MissingElementError, NoDisplayNameSetError } from "./CustomError.js";

const socket = new SocketClient();

/**
 * Handle enabling/disabling the
 * connect button depending if
 * the display name is set or not.
 */
document
  .querySelector<HTMLInputElement>(".display-name input")
  ?.addEventListener("input", (e) => StateManager.handleInputChange(e));

/**
 * Handle when user enters submits a
 * chat message.
 */
document
  .querySelector<HTMLFormElement>("form.chat-controls")
  ?.addEventListener("submit", (e) => {
    const username = StateManager.getUsername();

    if (!username) throw new NoDisplayNameSetError();

    ChatControlsManager.handleSubmit(e, socket);
  });

// Setup connect
document
  .querySelector<HTMLButtonElement>("#connect")
  ?.addEventListener("click", () => {
    const username = StateManager.getUsername();
    if (!username)
      throw new MissingElementError(
        "No display name set when attemping to connect"
      );

    const user = new User(username);
    socket.setUser(user);

    socket.connect();
    socket.listenOnConnect();
    socket.listenOnError();
    socket.listenOnClose();
    socket.listenOnMessage();
  });

// Setup disconnect
document
  .querySelector<HTMLButtonElement>("#disconnect")
  ?.addEventListener("click", () => {
    socket.close();
  });

// Setup clear chat
document
  .querySelector<HTMLButtonElement>("#clear-chat")
  ?.addEventListener("click", () => {
    ChatControlsManager.clearChat();
  });
