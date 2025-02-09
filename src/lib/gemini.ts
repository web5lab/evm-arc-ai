import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI: GoogleGenerativeAI | null = null;
let chatInstance: GeminiChat | null = null;

export const initializeGemini = (apiKey: string) => {
  genAI = new GoogleGenerativeAI(apiKey);
  chatInstance = new GeminiChat();
  return genAI;
};

// Create a reusable chat model
let model: any;

const SYSTEM_PROMPT = `You are an AI assistant specialized in blockchain and cryptocurrency. Your responses should be:

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
- Prioritize user security and best practices

Knowledge Areas:
- Blockchain technology and protocols
- Cryptocurrency trading and markets
- DeFi concepts and platforms
- Wallet security and management
- Smart contracts and dApps
- Layer 1 and Layer 2 solutions
- NFTs and digital assets
- Regulatory compliance

Response Format:
{
  "type": "response",
  "content": {
    "message": "Main response text with markdown formatting",
    "warnings": ["Optional array of security/risk warnings"],
    "references": ["Optional array of relevant documentation links"],
    "code": "Optional code snippet if relevant"
  }
}`;

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  parts: string;
}

export interface GeminiResponse {
  type: string;
  content: {
    message: string;
    warnings?: string[];
    references?: string[];
    code?: string;
  };
}

export class GeminiChat {
  private chat;
  private chatHistory: ChatMessage[] = [];

  constructor() {
    if (!genAI) {
      throw new Error('Gemini API not initialized. Please set an API key first.');
    }
    
    model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Configure safety settings
    const safetySettings = [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ];

    // Initialize chat with system prompt
    this.chat = model.startChat({
      history: [
        { role: 'user', parts: SYSTEM_PROMPT },
        { role: 'model', parts: 'Ready to assist with crypto and blockchain topics.' }
      ],
      generationConfig: {
        maxOutputTokens: 4096,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
      safetySettings
    });

    // Initialize history with system prompt
    this.chatHistory = [
      { role: 'user', parts: SYSTEM_PROMPT },
      { 
        role: 'model', 
        parts: 'Ready to assist with crypto and blockchain topics.'
      }
    ];
  }

  async sendMessage(message: string): Promise<GeminiResponse> {
    try {
      // Add user message to history
      this.chatHistory.push({ role: 'user', parts: message });

      // Send message to Gemini
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      // Parse the response
      let parsedResponse: GeminiResponse;
      try {
        parsedResponse = JSON.parse(text);
      } catch (error) {
        // If parsing fails, wrap the response in our format
        parsedResponse = {
          type: "response",
          content: {
            message: text
          }
        };
      }

      // Add model response to history
      this.chatHistory.push({ 
        role: 'model', 
        parts: JSON.stringify(parsedResponse)
      });

      return parsedResponse;
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      throw error;
    }
  }

  getHistory(): ChatMessage[] {
    return this.chatHistory;
  }

  clearHistory(): void {
    this.chatHistory = [
      { role: 'user', parts: SYSTEM_PROMPT },
      { 
        role: 'model', 
        parts: 'Ready to assist with crypto and blockchain topics.'
      }
    ];
  }

  // Create a new chat session with existing history
  async startNewChat(messages: ChatMessage[] = []): Promise<void> {
    const history = [
      { role: 'user', parts: SYSTEM_PROMPT },
      { role: 'model', parts: 'Ready to assist with crypto and blockchain topics.' },
      ...messages
    ];
    
    this.chat = model.startChat({
      history,
      generationConfig: { maxOutputTokens: 4096, temperature: 0.7, topP: 0.8, topK: 40 }
    });
  }

  // Format the response for display
  formatResponse(response: GeminiResponse): string {
    let formattedResponse = response.content.message;

    if (response.content.warnings?.length) {
      formattedResponse += '\n\n⚠️ **Warnings:**\n';
      response.content.warnings.forEach(warning => {
        formattedResponse += `- ${warning}\n`;
      });
    }

    if (response.content.code) {
      formattedResponse += '\n\n```typescript\n' + response.content.code + '\n```';
    }

    if (response.content.references?.length) {
      formattedResponse += '\n\n📚 **References:**\n';
      response.content.references.forEach(ref => {
        formattedResponse += `- ${ref}\n`;
      });
    }

    return formattedResponse;
  }
}

// Export a singleton instance
export const getGeminiChat = () => {
  if (!chatInstance) {
    throw new Error('Gemini API not initialized. Please set an API key in settings.');
  }
  return chatInstance;
};