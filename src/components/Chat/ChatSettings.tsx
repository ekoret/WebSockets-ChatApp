import { useContext } from "react";
import type { IChatMessage } from "../../pages/Chat";
import { AppContext } from "../../contexts/AppContext";
import ClearChatButton from "./ClearChatButton";

export interface ChatSettingsProps {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const ChatSettings = ({ setChatMessages }: ChatSettingsProps) => {
  const data = useContext(AppContext);
  const user = data?.globalData.user;

  return (
    <div className="mb-4 pb-4 flex items-center justify-between border-b-1 border-gray-300">
      <small className="flex items-center gap-2 text-">
        Connection
        <div
          className={`w-4 aspect-square rounded-full
         ${user ? (user.connected ? "bg-green-500" : "bg-red-500") : "bg-gray-500"}`}
        ></div>
      </small>
      <ClearChatButton setChatMessages={setChatMessages} />
    </div>
  );
};

export default ChatSettings;
