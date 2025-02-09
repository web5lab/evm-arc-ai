export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SpeedCommand {
  command: string;
  description: string;
}

export interface AIModel {
  id: string;
  name: string;
  provider: 'google' | 'huggingface' | 'openrouter';
  description: string;
}

export interface Network {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

export interface Token {
  address: string;
  name: string;
  symbol: string;
  network: string;
}