import MessageManager from "./MessageManager.js";
import StateManager from "./StateManager.js";
import type User from "./User.js";

export default class SocketClient {
  public _socket?: WebSocket;
  private _url: string = "ws://localhost:8765";
  private _protocols?: WebSocketProtocols;
  public user?: User;

  public setUser(user: User) {
    this.user = user;
  }

  public connect() {
    this._socket = new WebSocket(this._url, this._protocols);
  }

  public close() {
    // Broadcast that we're closing connection
    this.send(
      JSON.stringify({
        type: "disconnect",
        username: this.user?.username,
      })
    );

    StateManager.updateDisconnectedUI();

    // Delay closing connection to ensure disconnect
    // message can send and we can change UI
    setTimeout(() => this._socket?.close(), 200);
  }

  /**
   * Send a message to the server hosting the websocket
   */
  public send(data: WebSocketSendData) {
    this._socket?.send(data);
  }

  /**
   * Do things after the user has connected
   */
  public listenOnConnect() {
    this._socket?.addEventListener("open", (event) => {
      console.log("WebSocket connection established!");

      // Broadcast joining
      this.send(
        JSON.stringify({
          type: "connect",
          username: this.user?.username,
        })
      );

      // Update UI
      StateManager.updateConnectedUI();
    });
  }

  public listenOnClose() {
    this._socket?.addEventListener("close", (event) => {
      console.log("WebSocket connection closed.");
    });
  }

  public listenOnMessage() {
    this._socket?.addEventListener("message", (event) => {
      const data: ServerMessage = JSON.parse(event.data);

      switch (data.type) {
        case "connect":
          MessageManager.handleConnectMessage(data);
          break;
        case "disconnect":
          MessageManager.handleDisconnectMessage(data);
          break;
        case "message":
          MessageManager.handleIncomingMessage(data);
          break;
        default:
          console.error("Unknown message type:", data.type);
          return;
      }
    });
  }

  public listenOnError() {
    this._socket?.addEventListener("error", (event) => {
      MessageManager.handleErrorMessage();

      StateManager.updateDisconnectedUI();
    });
  }
}
