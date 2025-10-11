import { useState } from "react";
import ChatControls from "../components/Chat/ChatControls";
import ChatSettings from "../components/Chat/ChatSettings";
import ChatWindow from "../components/Chat/ChatWindow";

export interface IChatMessage {
  sender: string;
  message: string;
}

function Chat() {
  const initMessages: IChatMessage[] = [
    {
      sender: "ekoret",
      message: "hi",
    },
    {
      sender: "ekoret",
      message: "how are you?",
    },
    {
      sender: "ekoret",
      message: "what is your name?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite color?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite food?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite movie?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite book?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite sport?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite game?",
    },
    {
      sender: "ekoret",
      message: "how are you?",
    },
    {
      sender: "ekoret",
      message: "what is your name?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite color?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite food?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite movie?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite book?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite sport?",
    },
    {
      sender: "ekoret",
      message: "what is your favorite game?",
    },
  ];

  const [chatMessages, setChatMessages] =
    useState<IChatMessage[]>(initMessages);

  return (
    <div className="h-full flex flex-col">
      <ChatSettings setChatMessages={setChatMessages} />
      <ChatWindow chatMessages={chatMessages} />
      <ChatControls />
    </div>
  );
}

export default Chat;
