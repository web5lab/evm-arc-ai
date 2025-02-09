import React from 'react';
import { Settings, X, Key, Moon, Globe, Eye, EyeOff, MessageSquare, Network, Coins, Bot, Cpu, Thermometer, Hash, Code2 } from 'lucide-react';

const NETWORKS = [
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'bsc', name: 'BNB Chain', symbol: 'BNB' },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC' },
  { id: 'arbitrum', name: 'Arbitrum', symbol: 'ARB' },
  { id: 'optimism', name: 'Optimism', symbol: 'OP' },
];

const TOKENS = [
  { address: '0x...', name: 'ARCAI', symbol: 'CAI', network: 'ethereum' },
  { address: '0x...', name: 'Wrapped Ether', symbol: 'WETH', network: 'ethereum' },
  { address: '0x...', name: 'USD Coin', symbol: 'USDC', network: 'ethereum' },
];

const AI_MODELS = [
  { 
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'google',
    description: 'High-performance model for general tasks'
  },
  {
    id: 'mistral-7b',
    name: 'Mistral 7B',
    provider: 'huggingface',
    description: 'Efficient open-source model'
  },
  {
    id: 'claude-2',
    name: 'Claude 2',
    provider: 'openrouter',
    description: 'Advanced reasoning and analysis'
  },
];

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: {
    apiKey: string;
    theme: 'light' | 'dark';
    language: string;
  };
  onUpdate: (settings: any) => void;
}

export function SettingsModal({ isOpen, onClose, settings, onUpdate }: SettingsModalProps) {
  const [showApiKey, setShowApiKey] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold">Chat Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {/* API Key */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                Gemini API Key
              </div>
            </label>
            <div className="relative">
              <input
                type={showApiKey ? "text" : "password"}
                value={settings.apiKey}
                onChange={(e) => onUpdate({ apiKey: e.target.value })}
                className="w-full px-4 py-2 pr-10 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your Gemini API key"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showApiKey ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Get your API key from{' '}
              <a
                href="https://makersuite.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                Google AI Studio
              </a>
            </p>
          </div>

          {/* Additional API Keys */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Key className="w-4 h-4" />
              Additional API Keys
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Hugging Face API Key
                </label>
                <input
                  type="password"
                  value={settings.huggingfaceApiKey}
                  onChange={(e) => onUpdate({ huggingfaceApiKey: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  placeholder="hf_..."
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  OpenRouter API Key
                </label>
                <input
                  type="password"
                  value={settings.openrouterApiKey}
                  onChange={(e) => onUpdate({ openrouterApiKey: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  placeholder="sk-or-..."
                />
              </div>
            </div>
          </div>

          {/* Model Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              AI Model
            </label>
            <div className="grid gap-3">
              {AI_MODELS.map((model) => (
                <label
                  key={model.id}
                  className={`flex items-start p-3 border rounded-lg cursor-pointer transition-colors ${
                    settings.selectedModel === model.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="model"
                    value={model.id}
                    checked={settings.selectedModel === model.id}
                    onChange={(e) => onUpdate({ selectedModel: e.target.value })}
                    className="mt-1"
                  />
                  <div className="ml-3">
                    <div className="font-medium text-sm">{model.name}</div>
                    <div className="text-xs text-gray-500">{model.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Message Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message Limit
            </label>
            <select
              value={settings.messageLimit}
              onChange={(e) => onUpdate({ messageLimit: Number(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="25">25 messages</option>
              <option value="50">50 messages</option>
              <option value="100">100 messages</option>
              <option value="200">200 messages</option>
            </select>
          </div>

          {/* Network Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Network className="w-4 h-4" />
              Network
            </label>
            <select
              value={settings.selectedNetwork}
              onChange={(e) => onUpdate({ selectedNetwork: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              {NETWORKS.map((network) => (
                <option key={network.id} value={network.id}>
                  {network.name} ({network.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Token Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Coins className="w-4 h-4" />
              Token
            </label>
            <select
              value={settings.selectedToken}
              onChange={(e) => onUpdate({ selectedToken: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Select a token</option>
              {TOKENS.filter(token => token.network === settings.selectedNetwork).map((token) => (
                <option key={token.address} value={token.address}>
                  {token.name} ({token.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* System Prompt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Bot className="w-4 h-4" />
              System Prompt
            </label>
            <textarea
              value={settings.systemPrompt}
              onChange={(e) => onUpdate({ systemPrompt: e.target.value })}
              rows={6}
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">
              Customize the AI's behavior and responses by modifying the system prompt.
              Use markdown for formatting.
            </p>
          </div>

          {/* Advanced Settings */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Advanced Settings
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center gap-2">
                  <Thermometer className="w-3 h-3" />
                  Temperature ({settings.temperature})
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.temperature}
                  onChange={(e) => onUpdate({ temperature: Number(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>More Focused</span>
                  <span>More Creative</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1 flex items-center gap-2">
                  <Hash className="w-3 h-3" />
                  Max Tokens
                </label>
                <select
                  value={settings.maxTokens}
                  onChange={(e) => onUpdate({ maxTokens: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                >
                  <option value="2048">2,048 tokens</option>
                  <option value="4096">4,096 tokens</option>
                  <option value="8192">8,192 tokens</option>
                </select>
              </div>
            </div>
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4" />
                Theme
              </div>
            </label>
            <select
              value={settings.theme}
              onChange={(e) => onUpdate({ theme: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Language
              </div>
            </label>
            <select
              value={settings.language}
              onChange={(e) => onUpdate({ language: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}