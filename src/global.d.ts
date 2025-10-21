export interface ChatSocketMessage {
  type: "message" | "connect" | "disconnect";
  message: string;
  sender?: string;
  sentAt?: Date;
}

export interface WebSocketMessage {
  roomId: number;
  type: "connect" | "disconnect" | "message";
  message: string;
  sender?: string;
  sentAt?: Date;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface OnlineUser {
  id: number;
  username: string;
}

export interface ChatMessage {
  sender?: string;
  message: string;
}
