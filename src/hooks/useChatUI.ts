import { useState, useCallback } from 'react';

export const useChatUI = () => {
  const [chatOpen, setChatOpen] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [showAttachDropdown, setShowAttachDropdown] = useState(false);

  const toggleChat = useCallback(() => setChatOpen(prev => !prev), []);
  const toggleAttachDropdown = useCallback(() => setShowAttachDropdown(prev => !prev), []);

  return {
    chatOpen,
    setChatOpen,
    chatMessage,
    setChatMessage,
    showAttachDropdown,
    setShowAttachDropdown,
    toggleChat,
    toggleAttachDropdown
  };
};
