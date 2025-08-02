import * as pdfjsLib from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
import { pdfPoints } from "./pdfPoints";
import type { extractFromPdfProps } from "../types/types";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export const extractTextFromPDF = async ({
  file,
  setPdfInsights,
}: extractFromPdfProps) => {
  console.log("Extracting text from PDF...");
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let pdfText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item: any) => item.str).join(" ");
    pdfText += `\n${pageText}`;
  }

  console.log(pdfText);
  pdfPoints({ pdfText, setPdfInsights });
  return pdfText;
};
