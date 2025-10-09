import ChatControlsManager from "./ChatControlsManager.js";
import SocketClient from "./SocketClient.js";
import StateManager from "./StateManager.js";
import User from "./User.js";
import { MissingElementError } from "./CustomError.js";
import ElementFinder from "./ElementFinder.js";

const socket = new SocketClient();

// Setup display name input listener
ElementFinder.getDisplayNameInput().addEventListener("input", (e) =>
  StateManager.handleInputChange(e)
);

// Setup chat form submit
ElementFinder.getChatControlsForm().addEventListener("submit", (e) => {
  ChatControlsManager.handleSubmit(e, socket);
});

// Setup connect
ElementFinder.getConnectButton().addEventListener("click", () => {
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
ElementFinder.getDisconnectButton().addEventListener("click", () => {
  socket.close();
});

// Setup clear chat
ElementFinder.getClearChatButton().addEventListener("click", () => {
  ChatControlsManager.clearChat();
});

// Handle pressing Enter inside the chat textarea input
ElementFinder.getChatTextareaInput().addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    ChatControlsManager.handleSubmit(e, socket);
  }
});
