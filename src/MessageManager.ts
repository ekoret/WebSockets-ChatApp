import ChatWindowManager from "./ChatWindowManager.js";

export default class MessageManager {
  public static handleConnectMessage(data: ServerMessage) {
    const message = this.addTimestampToMessage(
      `${data.username} has joined the chat!`,
      data.sentAt
    );

    ChatWindowManager.addMessageToChatWindow(message);
  }

  public static handleDisconnectMessage(data: ServerMessage) {
    const message = this.addTimestampToMessage(
      `${data.username} has left the chat.`,
      data.sentAt
    );

    ChatWindowManager.addMessageToChatWindow(message);
  }

  public static handleIncomingMessage(data: any) {
    const message = this.addTimestampToMessage(
      `${data.username}: ${data.message}`,
      data.sentAt
    );

    ChatWindowManager.addMessageToChatWindow(message);
  }

  public static handleErrorMessage() {
    ChatWindowManager.addMessageToChatWindow(
      "There was an error connecting.. Try again later."
    );
  }

  private static addTimestampToMessage(message: string, sentAt: number) {
    return `${message} <span class="timestamp">${this.convertTimestampToLocalTimeString(
      sentAt
    )}</span>`;
  }

  private static convertTimestampToLocalTimeString(sentAt: number) {
    return new Date(sentAt).toLocaleTimeString();
  }
}
