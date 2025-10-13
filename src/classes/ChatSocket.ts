export class ChatSocket {
  socket: WebSocket;
  constructor(port: number) {
    this.socket = new WebSocket(`ws://localhost:${port}`);
  }
}
