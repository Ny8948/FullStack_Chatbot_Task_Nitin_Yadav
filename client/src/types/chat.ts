export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  suggestions?: string[];
}

export interface ChatResponse {
  success: boolean;
  data: {
    message: string;
    suggestions: string[];
  };
}