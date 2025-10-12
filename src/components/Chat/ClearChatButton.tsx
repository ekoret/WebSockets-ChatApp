import React from "react";
import type { IChatMessage } from "../../pages/Chat";
import AppIcon from "../AppIcon";
import { Eraser } from "lucide-react";

export interface ClearChatButtonProps {
  setChatMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const ClearChatButton = ({ setChatMessages }: ClearChatButtonProps) => {
  const handleOnClick = () => {
    setChatMessages([]);
  };

  return (
    <button
      onClick={handleOnClick}
      className="bg-bg-base dark:bg-white
       dark:text-bg-base rounded-lg text-white
        py-2 px-4 flex justify-center align-center
        cursor-pointer transition-colors
         hover:bg-amber-400 dark:hover:bg-indigo-400
         items-center gap-2"
      type="button"
    >
      <AppIcon Icon={Eraser} className="max-w-3" /> Clear Chat
    </button>
  );
};

export default ClearChatButton;
