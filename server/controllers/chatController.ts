import { Request, Response, NextFunction } from "express";

import { getChatbotResponse } from "../services/chatbotService";

export const chat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "A valid message is required.",
      });
    }

    const response = getChatbotResponse(message);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    next(error);
  }
};