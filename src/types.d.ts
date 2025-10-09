type WebSocketProtocols = string | string[] | undefined;
type WebSocketSendData =
  | string
  | ArrayBufferLike
  | Blob
  | ArrayBufferView<ArrayBufferLike>;

type SocketState = "Connected" | "Disconnected";
