import type { GeminiCompareProps, promptResponseProps } from "../types/types";

export const GeminiCompare = async ({
  pdfText,
  description,
  setLoading,
  setResponseGenerated,
  setResponse,
}: GeminiCompareProps) => {
  try {
    setLoading(true);

    if (!description) {
      throw new Error("Job description is missing");
    }

    const response = await fetch("http://localhost:4000/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pdfText, jobText: description }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch comparison data from backend");
    }

    const data = await response.json();
    let responseText = data.result;

    console.log("Raw Backend Gemini response:", responseText);

    if (responseText) {
      responseText = responseText.replace(/```json|```/g, "").trim();
    }

    let parsed: promptResponseProps;

    try {
      parsed = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("Failed to parse JSON:", jsonError);
      throw new Error("Invalid JSON format returned from Gemini");
    }

    // Optionally validate fields before assignment
    if (!parsed?.score || !parsed?.reason) {
      throw new Error("Incomplete data received from backend");
    }

    setResponse(parsed);
    setResponseGenerated(true);
    return responseText;
  } catch (error) {
    console.error("GeminiCompare Error:", error);
    setResponseGenerated(false);
  } finally {
    setLoading(false);
  }
};
