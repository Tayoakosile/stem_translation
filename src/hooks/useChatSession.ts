import { useState, useCallback } from 'react';

export interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface ChatState {
  conversationId: string | null;
  messages: Message[];
  isLoading: boolean;
}

export const useChatSession = () => {
  const [chatState, setChatState] = useState<ChatState>({
    conversationId: null,
    messages: [],
    isLoading: false,
  });

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Optimistic update
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, {
        sender: 'user',
        text: userMessage,
        timestamp: new Date().toISOString(),
      }],
      isLoading: true,
    }));

    try {
      const API_BASE = 'https://stem-translation-891212753818.us-central1.run.app/api/monitoring/conversations';
      
      let data;
      
      if (!chatState.conversationId) {
        // Create new conversation
        const response = await fetch(`${API_BASE}/create`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            additional_context: null,
            conversation_id: null,
            message: userMessage,
            name: null,
          }),
        });

        data = await response.json();
        
        // Generate conversation name in background
        fetch(`${API_BASE}/${data.conversation_id}/name`, {
          method: 'POST',
          headers: { 'accept': '*/*' },
        });

      } else {
        // Send message to existing conversation
        const response = await fetch(`${API_BASE}/${chatState.conversationId}/message`, {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            additional_context: null,
            message: userMessage,
          }),
        });

        data = await response.json();
      }

      setChatState(prev => ({
        ...prev,
        // Only update conversationId if it was null (from create response)
        conversationId: prev.conversationId || data.conversation_id,
        messages: [
          ...prev.messages,
          {
            sender: 'assistant',
            text: data.reply,
            timestamp: new Date().toISOString(),
          }
        ],
        isLoading: false,
      }));

    } catch (error) {
      console.error('Error sending message:', error);
      setChatState(prev => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            sender: 'assistant',
            text: 'Sorry, there was an error processing your message. Please try again.',
            timestamp: new Date().toISOString(),
          }
        ],
        isLoading: false,
      }));
    }
  }, [chatState.conversationId]);

  return {
    chatState,
    sendMessage,
  };
};
