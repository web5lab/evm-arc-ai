import React, { useState } from 'react';
import { Bot, Palette, Layout, MessageSquare, Code2, Save, Database, Repeat } from 'lucide-react';

export function CreateBotPage() {
  const [activeTab, setActiveTab] = useState('basic');
  const [primaryColor, setPrimaryColor] = useState('#f97316');
  const [chatPosition, setChatPosition] = useState('bottom-right');
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create New Bot</h1>
            <p className="text-gray-600 mt-1">Configure your AI chatbot</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {[
                { id: 'basic', name: 'Basic Info', icon: Bot },
                { id: 'appearance', name: 'Appearance', icon: Palette },
                { id: 'knowledge', name: 'Knowledge Base', icon: Database },
                { id: 'swap', name: 'Swap Settings', icon: Repeat },
                { id: 'layout', name: 'Layout & Position', icon: Layout },
                { id: 'messages', name: 'Messages', icon: MessageSquare },
                { id: 'code', name: 'Integration', icon: Code2 },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </button>
              ))}
            </nav>

            {/* Preview */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Live Preview</h3>
              <div className="aspect-[9/16] bg-gray-100 rounded-lg relative">
                <div
                  className={`absolute ${chatPosition} m-4 w-16 h-16 bg-[${primaryColor}] rounded-full flex items-center justify-center text-white`}
                >
                  <Bot className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Basic Info */}
              {activeTab === 'basic' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bot Name
                    </label>
                    <input
                      type="text"
                      placeholder="Support Assistant"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what your bot does..."
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Appearance */}
              {activeTab === 'appearance' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Color
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-12 h-12 rounded border p-1"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-32 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Font Family
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>System Default</option>
                      <option>Inter</option>
                      <option>Roboto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chat Window Style
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-4 border-2 border-orange-500 rounded-lg">
                        Modern
                      </button>
                      <button className="p-4 border-2 border-gray-200 rounded-lg">
                        Classic
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Knowledge Base */}
              {activeTab === 'knowledge' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Information
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Enter detailed information about your project, including tokenomics, features, and common questions..."
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      This information will be used to train your bot to provide accurate responses about your project.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Import Documentation
                    </label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-2 text-center">
                        <Database className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500">
                            <span>Upload documentation</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.md,.txt" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, MD, or TXT up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      External Resources
                    </label>
                    <div className="space-y-2">
                      <input
                        type="url"
                        placeholder="https://docs.example.com"
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <p className="text-sm text-gray-500">
                        Add URLs to your documentation, FAQs, or other relevant resources
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Swap Settings */}
              {activeTab === 'swap' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enable Token Swap
                    </label>
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Allow users to swap tokens directly in the chat
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Network
                    </label>
                    <select
                      value={selectedNetwork}
                      onChange={(e) => setSelectedNetwork(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="ethereum">Ethereum</option>
                      <option value="bsc">Binance Smart Chain</option>
                      <option value="polygon">Polygon</option>
                      <option value="arbitrum">Arbitrum</option>
                      <option value="optimism">Optimism</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Token Contract Address
                    </label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Enter your token's contract address on the selected network
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Supported Pairs
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-600">USDT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-600">ETH/BNB/MATIC (Native)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-orange-800 mb-2">
                      Important Note
                    </h4>
                    <p className="text-sm text-orange-700">
                      Make sure your token contract is verified on the selected network's block explorer
                      and has sufficient liquidity for swaps.
                    </p>
                  </div>
                </div>
              )}

              {/* Layout & Position */}
              {activeTab === 'layout' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chat Button Position
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'bottom-right', label: 'Bottom Right' },
                        { value: 'bottom-left', label: 'Bottom Left' },
                      ].map((position) => (
                        <button
                          key={position.value}
                          onClick={() => setChatPosition(position.value)}
                          className={`p-4 border-2 rounded-lg ${
                            chatPosition === position.value
                              ? 'border-orange-500'
                              : 'border-gray-200'
                          }`}
                        >
                          {position.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Window Size
                    </label>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Width</label>
                        <input
                          type="range"
                          min="300"
                          max="500"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Height</label>
                        <input
                          type="range"
                          min="400"
                          max="800"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Messages */}
              {activeTab === 'messages' && (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Welcome Message
                    </label>
                    <input
                      type="text"
                      placeholder="Hi! How can I help you today?"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Placeholder Text
                    </label>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Out of Office Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="We're currently offline. We'll get back to you soon!"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* Integration */}
              {activeTab === 'code' && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Installation
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-sm text-orange-400">
                        {`<script src="https://cdn.ARCAI.com/chat.js"></script>
<script>
  ARCAI.init({
    botId: "your_bot_id",
    primaryColor: "${primaryColor}",
    position: "${chatPosition}"
  });
</script>`}
                      </code>
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-orange-800 mb-2">
                      Remember
                    </h4>
                    <p className="text-sm text-orange-700">
                      Add this code to your website just before the closing {'</body>'} tag.
                      Make sure to whitelist your domain in the settings before testing.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Save className="w-5 h-5" />
                Save Bot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}