import { gemini } from "../utils/gemini";
import { PromptBuilder } from "./PromptBuilder";
import type { GeminiCompareProps, promptResponseProps } from "../types/types";

export const GeminiCompare = async ({
  pdfText,
  description,
  setLoading,
  setResponseGenerated,
  setResponse,
}: GeminiCompareProps) => {
  setLoading(true);

  if (description) {
    const prompt = PromptBuilder({ pdfText, jobText: description });

    const result = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    let responseText = result.text;

    console.log("Raw Gemini response:", responseText);
    if (responseText) {
      responseText = responseText.replace(/```json|```/g, "").trim();
    }

    console.log("After processing", responseText);

    // Safely parse the JSON string
    const parsed = responseText && JSON.parse(responseText);

    // Map to your interface shape
    const response: promptResponseProps = {
      score: parsed.Score,
      reason: parsed.Reason,
    };
    setResponse(response);
    console.log(response);
    setResponseGenerated(true);
    setLoading(false);
    return responseText;
  }
};
