'use client';
import Image from 'next/image';

type ChatInputProps = {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  placeholder?: string;
}

const ChatInput = ({ chatMessage, setChatMessage, handleKeyPress, handleChatSubmit, placeholder }: ChatInputProps) => {
  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        value={chatMessage}
        onChange={(e) => setChatMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 font-medium text-[16px] leading-[32px] tracking-0 text-gray-1 placeholder:text-gray-1 placeholder:italic outline-none bg-transparent"
      />
      <button onClick={handleChatSubmit} disabled={!chatMessage.trim()} className="text-white py-[8px] px-3 flex items-center justify-center rounded-[10px] bg-linear-to-r from-[#FA8C54] to-[#FB31BB] hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        <Image src="/images/sent.svg" alt="send icon" width={20} height={20} />
      </button>
    </div>
  )
}

export default ChatInput;
