import type { ChatSocketMessage } from "../global";

export class ChatSocket {
  socket: WebSocket;
  constructor(port: number) {
    this.socket = new WebSocket(`ws://localhost:${port}`);
  }

  public send(requestData: ChatSocketMessage) {
    this.socket.send(JSON.stringify(requestData));
  }
}
