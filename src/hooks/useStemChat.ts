import React, { useCallback } from 'react';
import { useChatUI } from './useChatUI';
import { useChatSession } from './useChatSession';

export const useStemChat = () => {
  const ui = useChatUI();
  const session = useChatSession();

  const handleChatSubmit = useCallback(async () => {
    if (!ui.chatMessage.trim()) return;
    
    const messageToSend = ui.chatMessage.trim();
    ui.setChatMessage('');
    ui.setChatOpen(true);
    
    await session.sendMessage(messageToSend);
  }, [ui, session]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  }, [handleChatSubmit]);

  return {
    ui,
    session,
    handleChatSubmit,
    handleKeyPress,
  };
};
