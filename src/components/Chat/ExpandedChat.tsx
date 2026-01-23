'use client';
import React, { useRef, useEffect } from 'react';
import TargetAudience from '../shared/TargetAudience';
import Chatbox from '../shared/Chatbox';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface ExpandedChatProps {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  chatMessage: string;
  setChatMessage: (msg: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChatSubmit: () => void;
  showAttachDropdown: boolean;
  setShowAttachDropdown: (show: boolean) => void;
  isLoading: boolean;
}

const ExpandedChat: React.FC<ExpandedChatProps> = ({
  open,
  onClose,
  messages,
  chatMessage,
  setChatMessage,
  handleKeyPress,
  handleChatSubmit,
  showAttachDropdown,
  setShowAttachDropdown,
  isLoading
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  return (
    <div 
      className={cn(`overflow-hidden fixed inset-0 z-50 flex w-full  bg-white shadow-2xl transition-transform duration-300 ease-in-out`, {
        'translate-x-0': open,
        'translate-x-full': !open
      })}
    >
      {/* Sidebar Rail */}
      <div className="w-[75px] p-5 hidden sm:flex sm:flex-col sm:gap-5 sm:items-center h-full bg-white-4">
        {/* Logo Placeholder */}
         <div className="w-[40px] h-[40px]">
             <Image src="/images/chat-logo.svg" alt="Chat Logo" width={35} height={35} className='w-[35px] h-[35px] object-cover'/>
         </div>
        
        <div className='flex-1 flex flex-col gap-5'>
            <div className="flex-1 flex flex-col gap-4 w-full items-center">
                <button className='cursor-pointer'>
                    <Image src="/images/new-chat.svg" alt="New Chat" width={20} height={20} className='w-[20px] h-[20px] object-cover'/>
                </button>
                <button className="cursor-pointer">
                    <Image src="/images/search.svg" alt="Search" width={20} height={20} className='w-[20px] h-[20px] object-cover'/>
                </button>
                <button className="cursor-pointer">
                    <Image src="/images/gallery.svg" alt="Settings" width={20} height={20} className='w-[20px] h-[20px] object-cover'/>
                </button>
            </div>

            {/* Bottom User Avatar */}
            <button className='cursor-pointer'>
                <Image src="/images/avatar.svg" alt="New Chat" width={32} height={32} className='w-[32px] h-[32px] object-cover'/>
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full bg-[#FAFAFA] relative overflow-hidden"> 
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-20"
        >
            <span className="text-2xl">&times;</span>
        </button>


        {/* Render View Selection: Empty State vs Active Chat */}
        {messages.length === 0 ? (
            /* EMPTY STATE - CENTERED UI */
            <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
                <div className="w-full max-w-[796px] flex flex-col gap-10 items-center">
                    
                    {/* Greeting */}
                    <div className="text-center space-y-2">
                        <h2 className="text-[32px] font-medium text-gray-800">Hello Sarah!</h2>
                        <h3 className="text-[28px] text-gray-600 font-light">What would you like to learn today?</h3>
                    </div>

                    {/* Target Audience */}
                    <div className="scale-90 origin-center w-full">
                        <TargetAudience />
                    </div>

                    {/* Chat Input */}
                    <div className="w-full">
                         <Chatbox 
                            chatMessage={chatMessage} 
                            setChatMessage={setChatMessage} 
                            handleKeyPress={handleKeyPress} 
                            handleChatSubmit={handleChatSubmit} 
                            showAttachDropdown={showAttachDropdown} 
                            setShowAttachDropdown={setShowAttachDropdown}
                            placeholder="What would you like to learn about today?"
                         />
                    </div>
                </div>
            </div>
        ) : (
             /* ACTIVE CHAT STATE */
            <div className="flex flex-col h-full">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                     {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] rounded-2xl px-6 py-4 shadow-sm ${
                                msg.sender === 'user' 
                                ? 'bg-white text-gray-800 border border-gray-100 rounded-br-none' 
                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                            }`}>
                                <p className="text-base whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                <p className="text-xs mt-2 text-gray-400 text-right">
                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-white rounded-2xl px-6 py-4 border border-gray-100 shadow-sm rounded-bl-none">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area (Fixed at bottom) */}
                <div className="p-6 bg-[#FAFAFA]">
                    <div className="max-w-[800px] mx-auto">
                        <Chatbox 
                            chatMessage={chatMessage} 
                            setChatMessage={setChatMessage} 
                            handleKeyPress={handleKeyPress} 
                            handleChatSubmit={handleChatSubmit} 
                            showAttachDropdown={showAttachDropdown} 
                            setShowAttachDropdown={setShowAttachDropdown}
                            placeholder="Type a message to continue..."
                        />
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ExpandedChat;
