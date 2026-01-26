"use client";
import React from "react";
import ChatInput from "./ChatInput";
import ChatFooter from "./ChatFooter";

export type ChatboxProps = {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  showAttachDropdown: boolean;
  setShowAttachDropdown: (show: boolean) => void;
  placeholder?: string;
};

const Chatbox = ({
  chatMessage,
  setChatMessage,
  handleKeyPress,
  handleChatSubmit,
  showAttachDropdown,
  setShowAttachDropdown,
  placeholder = "What would you like to learn about today?",
}: ChatboxProps) => {
  return (
    <div className="relative flex flex-col gap-16 p-4 rounded-lg bg-white shadow-1 border border-gray-100">
      {/* Input */}
      <ChatInput
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleKeyPress={handleKeyPress}
        handleChatSubmit={handleChatSubmit}
        placeholder={placeholder}
      />

      {/* Footer */}
      <ChatFooter
        showAttachDropdown={showAttachDropdown}
        setShowAttachDropdown={setShowAttachDropdown}
      />
    </div>
  );
};

export default Chatbox;
