import { useState, useCallback, useEffect } from 'react';
import { getGeminiChat, GeminiResponse } from '../lib/gemini';
import { Message } from '../types/chat';

export function useGeminiChat() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (message: string): Promise<string> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const geminiChat = getGeminiChat();
      const response = await geminiChat.sendMessage(message);
      return geminiChat.formatResponse(response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearHistory = useCallback(() => {
    const geminiChat = getGeminiChat();
    geminiChat.clearHistory();
  }, []);

  return {
    sendMessage,
    clearHistory,
    isLoading,
    error
  };
}