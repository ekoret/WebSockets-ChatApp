interface ProviderProps {
  children: React.ReactNode;
}

export interface ChatSocketMessage {
  type: "message" | "connect" | "disconnect";
  message: string;
  sender?: string;
  sentAt?: Date;
}
