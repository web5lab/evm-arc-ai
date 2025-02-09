import { useState, useEffect } from 'react';
import { initializeGemini } from '../lib/gemini';

const STORAGE_KEY = 'crypto_ai_settings';

interface Settings {
  apiKey: string;
  theme: 'light' | 'dark';
  language: string;
  messageLimit: number;
  selectedModel: string;
  selectedNetwork: string;
  selectedToken: string;
  systemPrompt: string;
  huggingfaceApiKey: string;
  openrouterApiKey: string;
  temperature: number;
  maxTokens: number;
}

const defaultSettings: Settings = {
  apiKey: 'AIzaSyC1DNcalWMBdEdHEIMin1kAFpuJipgXViw', // Default API key
  theme: 'light',
  language: 'en',
  messageLimit: 50,
  selectedModel: 'gemini-pro',
  selectedNetwork: 'ethereum',
  selectedToken: '',
  systemPrompt: `You are an AI assistant specialized in blockchain and cryptocurrency. Your responses should be:

1. Accurate and technically sound
2. Clear and easy to understand
3. Security-focused when dealing with crypto topics
4. Professional but friendly

Guidelines:
- Always provide context for technical terms
- Include relevant warnings about security or risks
- Break down complex concepts into simpler parts
- Use markdown formatting for better readability
- Stay neutral when discussing specific cryptocurrencies
- Prioritize user security and best practices`,
  huggingfaceApiKey: '',
  openrouterApiKey: '',
  temperature: 0.7,
  maxTokens: 4096,
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    if (settings.apiKey) {
      try {
        initializeGemini(settings.apiKey);
      } catch (error) {
        console.error('Failed to initialize Gemini:', error);
      }
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return {
    settings,
    updateSettings,
  };
}