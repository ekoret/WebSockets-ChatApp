import type { IChatMessage } from "../../pages/Chat";

interface ChatWindowProps {
  chatMessages: IChatMessage[];
}

const ChatWindow = ({ chatMessages }: ChatWindowProps) => {
  return (
    <div className="flex-1 overflow-y-auto mb-4">
      {chatMessages.map((message, index) => {
        return (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{message.sender} says:</h3>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatWindow;
