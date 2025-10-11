import type { IChatMessage } from "../../pages/Chat";

export interface ChatSettingsProps {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const ChatSettings = ({ setChatMessages }: ChatSettingsProps) => {
  const handleOnClick = () => {
    setChatMessages([]);
  };

  return (
    <div className="min-h-[50px] ml-auto">
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
