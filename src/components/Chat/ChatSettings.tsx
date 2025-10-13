import ClearChatButton from "./ClearChatButton";
import { useUserContext } from "../../hooks/useUserContext";

const ChatSettings = () => {
  const userContext = useUserContext();

  return (
    <div className="mb-4 pb-4 flex items-center justify-between border-b-1 border-gray-300">
      <small className="flex items-center gap-2 text-">
        Connection
        <div
          className={`w-4 aspect-square rounded-full ${userContext.user?.connected ? "bg-green-500" : "bg-red-500"}`}
        ></div>
      </small>
      <ClearChatButton />
    </div>
  );
};

export default ChatSettings;
