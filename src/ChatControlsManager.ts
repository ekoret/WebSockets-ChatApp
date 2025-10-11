import ElementFinder from "./ElementFinder.js";
import type SocketClient from "./SocketClient.js";

export default class ChatControlsManager {
  /**
   * Handle when user submits a chat message.
   */
  public static handleSubmit(
    e: SubmitEvent | KeyboardEvent,
    socket: SocketClient
  ) {
    e.preventDefault();

    // TODO: switch to use form instead of input
    // const form = e.target as HTMLFormElement;

    const input = ElementFinder.getChatTextareaInput();

    // This should never happen
    if (!socket.user) throw new Error("Missing user object on socket");

    // Do nothing if user entered nothing
    if (!input.value) return;

    // Send the message to the websocket
    const data = {
      type: "message",
      username: socket.user.username,
      message: input.value,
    };

    socket.send(JSON.stringify(data));

    // Clear the text area after submitting
    ChatControlsManager.clearTextArea();
  }

  public static clearChat() {
    const chatWindow = ElementFinder.getChatWindow();

    if (chatWindow) chatWindow.innerHTML = "";
  }

  /**
   * Clear the chat text are input
   */
  private static clearTextArea() {
    const textArea = ElementFinder.getChatTextareaInput();

    if (textArea) textArea.value = "";
  }
}
