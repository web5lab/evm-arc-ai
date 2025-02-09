import { useState, useEffect } from 'react';
import { Chat, Message } from '../types/chat';

const STORAGE_KEY = 'crypto_ai_chats';

export function useChats() {
  const [chats, setChats] = useState<Chat[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [activeChat, setActiveChat] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  const createChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setChats((prev) => [...prev, newChat]);
    setActiveChat(newChat.id);
    return newChat.id;
  };

  const addMessage = (chatId: string, message: Omit<Message, 'id'>) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [...chat.messages, { ...message, id: Date.now().toString() }],
            updatedAt: new Date(),
          };
        }
        return chat;
      })
    );
  };

  const deleteChat = (chatId: string) => {
    setChats((prev) => prev.filter((chat) => chat.id !== chatId));
    if (activeChat === chatId) {
      setActiveChat(null);
    }
  };

  const updateChatTitle = (chatId: string, title: string) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === chatId) {
          return { ...chat, title };
        }
        return chat;
      })
    );
  };

  return {
    chats,
    activeChat,
    setActiveChat,
    createChat,
    addMessage,
    deleteChat,
    updateChatTitle,
  };
}