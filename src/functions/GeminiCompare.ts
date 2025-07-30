import axios from "axios";
import { gemini } from "../utils/gemini";
import { PromptBuilder } from "./PromptBuilder";
import type { GeminiCompareProps } from "../types/types";

export const GeminiCompare = async ({
  pdfText,
  url,
  description,
  setLoading,
  setResponseGenerated,
}: GeminiCompareProps) => {
  setLoading(true);
  console.log("sending request");
  if (!url && !description) {
    alert("Please enter a valid URL or a job description");
    setLoading(false);
    return;
  }
  if (description && url) {
    setLoading(false);
    console.log("Either enter one or the other");
  }

  if (url?.includes("linkedin.com")) {
    console.log("linkedin");
    setLoading(false);
    return;
  }

  if (url) {
    try {
      const scrapeResponse = await axios.post("http://localhost:4000/scrape", {
        url,
      });

      const jobText = scrapeResponse.data.content;
      console.log(jobText);

      const prompt = PromptBuilder({ pdfText, jobText });

      const result = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      console.log(result.text);
      const responseText = result.text;
      setResponseGenerated(true);
      setLoading(false);

      return responseText;
    } catch (error) {
      console.error("Comparison error:", error);
      return "Error comparing resume and job description.";
    }
  } else if (description) {
    const prompt = PromptBuilder({ pdfText, jobText: description });

    const result = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const responseText = result.text;
    console.log(responseText);
    setResponseGenerated(true);
    setLoading(false);
    return responseText;
  }
};
