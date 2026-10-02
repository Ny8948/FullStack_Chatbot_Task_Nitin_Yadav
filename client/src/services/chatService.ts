import api from "./api";

import type { ChatResponse } from "../types/chat";

export const sendChatMessage = async (
  message: string
): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>(
    "/chat",
    {
      message,
    }
  );

  return response.data;
};