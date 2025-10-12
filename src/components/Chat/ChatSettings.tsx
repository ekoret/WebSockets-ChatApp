import { useContext } from "react";
import type { IChatMessage } from "../../pages/Chat";
import { AppContext } from "../../contexts/AppContext";

export interface ChatSettingsProps {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const ChatSettings = ({ setChatMessages }: ChatSettingsProps) => {
  const data = useContext(AppContext);
  const user = data?.globalData.user;

  const handleOnClick = () => {
    setChatMessages([]);
  };

  return (
    <div className="mb-4 pb-4 flex items-center justify-between border-b-1 border-gray-300">
      <small className="flex items-center gap-2 text-">
        Connection
        <div
          className={`w-4 aspect-square rounded-full
         ${user ? (user.connected ? "bg-green-500" : "bg-red-500") : "bg-gray-500"}`}
        ></div>
      </small>
      <button
        onClick={handleOnClick}
        className="bg-bg-base dark:bg-white dark:text-bg-base rounded text-white py-2 px-4 flex justify-center align-center"
        type="button"
      >
        Clear Chat
      </button>
    </div>
  );
};

export default ChatSettings;
