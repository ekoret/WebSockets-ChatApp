import ElementFinder from "./ElementFinder.js";

export default class ChatWindowManager {
  public static addMessageToChatWindow(message: string) {
    const chatWindow = ElementFinder.getChatWindow();

    const newMessage = document.createElement("p");
    newMessage.textContent = message;

    chatWindow.appendChild(newMessage);
  }
}
