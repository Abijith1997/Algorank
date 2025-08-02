import type { handleUploadProps } from "../types/types";
import { extractTextFromPDF } from "./extractTextFromPDF";

export const handleUpload = async ({
  e,
  setPdfText,
  setFileName,
  setPdfInsights,
}: handleUploadProps) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.type !== "application/pdf") {
    alert("Only PDF files are allowed.");
    return;
  }

  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    alert("File size must be less than 5MB.");
    return;
  }

  try {
    setFileName(file.name);
    const text = await extractTextFromPDF({ file, setPdfInsights }); // wait for Promise to resolve
    setPdfText(text); // save to state for use in other functions
  } catch (error) {
    console.error("Error extracting PDF text:", error);
  }
};
