import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, Send, Plus, Trash2, Edit2, User, MessageSquare, Settings } from 'lucide-react';
import { useGeminiChat } from '../hooks/useGeminiChat';
import { useChats } from '../hooks/useChats';
import { useSettings } from '../hooks/useSettings';
import { SettingsModal } from '../components/SettingsModal';
import { Message, SpeedCommand } from '../types/chat';
import { Navbar } from '../components/Navbar';

const SPEED_COMMANDS: SpeedCommand[] = [
  { command: '/price', description: 'Get current token price' },
  { command: '/buy', description: 'How to buy tokens' },
  { command: '/wallet', description: 'Wallet setup guide' },
  { command: '/security', description: 'Security best practices' },
  { command: '/help', description: 'Show all commands' }
];


export function TryAIPage() {
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    chats,
    activeChat,
    setActiveChat,
    createChat,
    addMessage,
    deleteChat,
    updateChatTitle,
  } = useChats();

  const { settings, updateSettings } = useSettings();

  // Get active chat messages
  const activeMessages = activeChat
    ? chats.find((chat) => chat.id === activeChat)?.messages || []
    : [];

  const { sendMessage, isLoading, error } = useGeminiChat();

  useEffect(() => {
    if (error) {
      console.error('Gemini chat error:', error);
    }
  }, [error]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, activeChat]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    if (!activeChat) {
      const newChatId = createChat();
      setActiveChat(newChatId);
    }

    // Add user message
    addMessage(activeChat!, {
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    });

    // Simulate bot response
    try {
      const response = await sendMessage(inputValue);
      addMessage(activeChat!, {
        type: 'bot',
        content: response,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error getting AI response:', error);
      addMessage(activeChat!, {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      });
    }

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (isEditing) {
        handleSaveTitle(isEditing);
      } else {
        handleSend();
      }
    }
  };

  const handleNewChat = () => {
    createChat();
  };

  const handleEditTitle = (chatId: string, currentTitle: string) => {
    setIsEditing(chatId);
    setEditValue(currentTitle);
  };

  const handleSaveTitle = (chatId: string) => {
    if (editValue.trim()) {
      updateChatTitle(chatId, editValue.trim());
    }
    setIsEditing(null);
    setEditValue('');
  };

  return (
    <div className=" mt-[68px] bg-white flex flex-col md:flex-row">
        <Navbar />
      {/* Sidebar */}
      <div className="md:w-[280px] bg-gray-50 border-r border-gray-200 flex flex-col h-auto md:h-[calc(100vh-4rem)] order-2 md:order-1">
        <div className="p-4 mb-2">
          <button
            onClick={handleNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 mb-4 shadow-sm relative z-10"
          >
            <Plus className="w-5 h-5" />
            New chat
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`group relative rounded-lg cursor-pointer mb-2 ${
                activeChat === chat.id
                  ? 'bg-orange-50 text-orange-700 relative z-10'
                  : 'hover:bg-gray-100 relative z-10'
              }`}
            >
              <div className="flex items-center p-3">
                {isEditing === chat.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onBlur={() => handleSaveTitle(chat.id)}
                    className="flex-1 px-2 py-1 rounded border focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => setActiveChat(chat.id)}
                    className="flex items-center gap-3 flex-1"
                  >
                    <MessageSquare className={`w-4 h-4 ${activeChat === chat.id ? 'text-orange-500' : 'text-gray-500'}`} />
                    <span className="text-sm text-gray-700 truncate">{chat.title}</span>
                  </div>
                )}
                <div className="hidden group-hover:flex items-center gap-1 ml-2">
                  <button
                    onClick={() => handleEditTitle(chat.id, chat.title)}
                    className="p-1 text-gray-400 hover:text-gray-600 relative z-20"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => deleteChat(chat.id)}
                    className="p-1 text-gray-400 hover:text-red-500 relative z-20"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Settings Button at Bottom */}
        <div className="p-4 mt-auto border-t">
          <button
            onClick={() => setShowSettings(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm relative z-10"
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
      </div>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] order-1 md:order-2">
        {activeChat ? (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto py-4 md:py-8 px-2 md:px-4">
                {activeMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-8 last:mb-4 animate-fade-in-up`}
                  >
                    <div className={`flex max-w-3xl mx-auto ${
                      message.type === 'bot' ? 'bg-gray-50/80' : ''
                    }`}>
                      <div className="flex gap-3 md:gap-5 px-3 md:px-6 py-4 md:py-6">
                        {message.type === 'bot' ? (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                        )}
                        <div className="prose prose-slate max-w-none flex-1 leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white shadow-sm">
              <div className="max-w-3xl mx-auto p-2 md:p-4">
                {/* Speed Commands */}
                <div className="mb-2 md:mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {SPEED_COMMANDS.map((cmd) => (
                    <button
                      key={cmd.command}
                      onClick={() => setInputValue(cmd.command)}
                      className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-xs md:text-sm whitespace-nowrap relative z-10"
                    >
                      <MessageSquare className="w-3 h-3" />
                      {cmd.command}
                    </button>
                  ))}
                </div>
                {/* Command List */}
                {showCommands && (
                  <div className="mb-2 md:mb-4 p-2 md:p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm text-gray-700">Available Commands</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {SPEED_COMMANDS.map((cmd) => (
                        <div key={cmd.command} className="flex items-center gap-2 text-sm">
                          <code className="bg-white px-2 py-1 rounded text-orange-600">{cmd.command}</code>
                          <span className="text-gray-600">{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="relative">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Message..."
                    rows={1}
                    className="w-full pr-12 pl-4 py-3 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none shadow-sm hover:border-gray-300 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="absolute right-2 bottom-2 p-1.5 text-gray-400 hover:text-orange-500 disabled:hover:text-gray-400 disabled:opacity-50 transition-colors relative z-20"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="mt-2 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-gray-400 space-y-1 md:space-y-0">
                  <button
                    onClick={() => setShowCommands(!showCommands)}
                    className="hover:text-orange-500 transition-colors relative z-10"
                  >
                    {showCommands ? 'Hide Commands' : 'Show Commands'}
                  </button>
                  <span>Press Enter to send, Shift + Enter for new line</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="relative max-w-2xl mx-auto px-4 text-center">
              <div className="relative mb-8">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-blob" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Bot className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to AI Chat
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                Your AI-powered assistant for all things crypto. Ask questions, get market insights, and learn about blockchain technology.
              </p>
              
              {/* Feature Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { title: 'Market Analysis', description: 'Get real-time insights and price analysis' },
                  { title: 'Technical Support', description: 'Solve blockchain and wallet issues' },
                  { title: 'Learning Hub', description: 'Learn about crypto concepts and technology' }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-orange-100/50 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="max-w-xl mx-auto">
                  <div className="relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder="Ask me anything about crypto..."
                      rows={2}
                      className="w-full pr-12 pl-4 py-3 text-base bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none shadow-sm hover:border-gray-300 transition-colors"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim() || isLoading}
                      className="absolute right-3 bottom-3 p-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:hover:from-orange-500 disabled:hover:to-orange-600 transition-all duration-200 group"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </button>
                  </div>
                  <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                    <span>Press Enter to send, Shift + Enter for new line</span>
                    <button
                      onClick={() => setShowCommands(!showCommands)}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {showCommands ? 'Hide Commands' : 'Show Commands'}
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">
                  Try asking about token prices, wallet setup, or blockchain concepts
                </p>
                
                {showCommands && (
                  <div className="max-w-xl mx-auto p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-100/50 shadow-sm">
                    <h4 className="font-medium mb-3 text-sm text-gray-700">Quick Commands</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {SPEED_COMMANDS.map((cmd) => (
                        <button
                          key={cmd.command}
                          onClick={() => setInputValue(cmd.command)}
                          className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-sm text-left"
                        >
                          <code className="font-mono">{cmd.command}</code>
                          <span className="text-gray-600 text-xs">{cmd.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onUpdate={updateSettings}
      />
    </div>
  );
}