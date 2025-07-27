import { GoogleGenAI } from "@google/genai";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const gemini = new GoogleGenAI({ apiKey: geminiApiKey });
