type WebSocketProtocols = string | string[] | undefined;
type WebSocketSendData =
  | string
  | ArrayBufferLike
  | Blob
  | ArrayBufferView<ArrayBufferLike>;

type SocketState = "Connected" | "Disconnected";

interface ServerMessage {
  type: "connect" | "disconnect" | "message" | "error";
  username?: string;
  message: string;
  sentAt: number;
}
