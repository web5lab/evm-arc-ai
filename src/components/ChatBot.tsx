import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, CreditCard, Wallet, Code, HelpCircle, Command } from 'lucide-react';

type Message = {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

const COMMANDS = [
  { command: '/help', description: 'Show available commands' },
  { command: '/price', description: 'Get current token price' },
  { command: '/buy', description: 'Start token purchase process' },
  { command: '/payment', description: 'View payment methods' },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hi! I can help you purchase ARCAI tokens. Type /help to see available commands.',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Handle commands
    if (inputValue.startsWith('/')) {
      const command = inputValue.toLowerCase();
      let response = '';

      switch (command) {
        case '/help':
          response = 'Available commands:\n' + COMMANDS.map(cmd => 
            `${cmd.command} - ${cmd.description}`
          ).join('\n');
          break;
        case '/price':
          response = 'Current CAI token price: $0.015';
          break;
        case '/buy':
          response = 'How many CAI tokens would you like to purchase? Minimum purchase is 1000 CAI.';
          break;
        case '/payment':
          response = 'We accept:\n- Credit/Debit Cards\n- Cryptocurrency (ETH, BTC, USDT)\n- Bank Transfer';
          break;
        default:
          response = 'Unknown command. Type /help to see available commands.';
      }

      setMessages(prev => [
        ...prev,
        { type: 'user', content: inputValue, timestamp: new Date() },
        { type: 'bot', content: response, timestamp: new Date() }
      ]);
      setInputValue('');
      return;
    }

    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: 'user', content: inputValue, timestamp: new Date() },
    ]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const userInput = inputValue.toLowerCase();

      if (userInput.includes('price') || userInput.includes('cost')) {
        botResponse = 'Our ARCAI (CAI) token is currently priced at $0.015. Would you like to proceed with a purchase?';
      } else if (userInput.includes('buy') || userInput.includes('purchase')) {
        botResponse = 'Great! How many CAI tokens would you like to purchase? Our minimum purchase is 1000 CAI.';
      } else if (userInput.includes('payment') || userInput.includes('card')) {
        botResponse = 'We accept credit/debit cards and crypto payments. Which payment method would you prefer?';
      } else {
        botResponse = 'I can help you with token purchases, pricing information, and payment methods. What would you like to know?';
      }

      setMessages((prev) => [
        ...prev,
        { type: 'bot', content: botResponse, timestamp: new Date() },
      ]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 sm:w-14 sm:h-14 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
      >
        <Bot className="sm:w-6 sm:h-6 w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Mobile Responsive Styles */}
          <style>{`
            @media (max-width: 640px) {
              .chat-window {
                bottom: 0 !important;
                right: 0 !important;
                width: 100% !important;
                height: 100vh !important;
                border-radius: 0 !important;
              }
            }
          `}</style>

          {/* Header with Mobile Support */}
          <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-orange-500" />
              <span className="font-semibold">Token Purchase Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setInputValue('/buy')}
                className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-sm"
              >
                <Wallet className="w-4 h-4" />
                Buy Tokens
              </button>
              <button
                onClick={() => setInputValue('/payment')}
                className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-sm"
              >
                <CreditCard className="w-4 h-4" />
                Payment Methods
              </button>
              <button
                onClick={() => setShowCommands(!showCommands)}
                className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-sm"
              >
                <Command className="w-4 h-4" />
                Commands
              </button>
            </div>
          </div>

          {/* Commands List */}
          {showCommands && (
            <div className="p-4 bg-gray-50 border-b">
              <h4 className="font-medium mb-2 text-sm text-gray-700">Available Commands</h4>
              <div className="space-y-2">
                {COMMANDS.map((cmd, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <code className="bg-white px-2 py-1 rounded text-orange-600">{cmd.command}</code>
                    <span className="text-gray-600">{cmd.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t sticky bottom-0 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Branding */}
          <div className="p-2 text-center border-t text-xs text-gray-500">
            Powered by <span className="text-orange-500 font-medium">ARCAI</span>
          </div>
        </div>
      )}
    </>
  );
}