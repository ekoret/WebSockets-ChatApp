export interface ChatSocketRequestData {
  type: "message" | "connect" | "disconnect";
  message: string;
  sender?: string;
}

export class ChatSocket {
  socket: WebSocket;
  constructor(port: number) {
    this.socket = new WebSocket(`ws://localhost:${port}`);
  }

  public send(requestData: ChatSocketRequestData) {
    this.socket.send(JSON.stringify(requestData));
  }
}
