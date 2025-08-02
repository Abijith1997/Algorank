import type { pdfPointsGeneratorProps } from "../types/types";

export const pdfPoints = async ({
  pdfText,
  setPdfInsights,
}: pdfPointsGeneratorProps) => {
  try {
    const response = await fetch("http://localhost:4000/extract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pdfText }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch insights");
    }

    const data = await response.json();

    const cleaned = data.replace(/```json|```/g, "").trim();

    console.log("Cleaned Insights:", cleaned);

    try {
      const parsed = JSON.parse(cleaned); // ✅ parse it here
      setPdfInsights(parsed); // ✅ now it's an object
    } catch (err) {
      console.error("Failed to parse cleaned JSON:", err);
    }
    return; // This will be your extracted points (skills, strengths, etc.)
  } catch (error) {
    console.error("Error calling /extract:", error);
    return;
  }
};
