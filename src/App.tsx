import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Bars/Navbar";
import { Output } from "./components/Output/Output";
import type { pdfPointsProps, promptResponseProps } from "./types/types";
import { Input } from "./components/input/Input";

function App() {
  const [pdfText, setPdfText] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [responseGenerated, setResponseGenerated] = useState<boolean>(true);
  const [pdfInsights, setPdfInsights] = useState<pdfPointsProps | null>(null);
  const [response, setResponse] = useState<promptResponseProps>({
    score: 15,
    reason:
      "Candidate lacks mandatory Angular and Java framework experience, falls short on required years of experience, and has a significant geographic/security clearance mismatch for a federal government role.",
  });

  useEffect(() => {
    console.log("response", response);
    if (response.score > 0) {
      localStorage.setItem("response", JSON.stringify(response));
    }
  }, [response]);

  useEffect(() => {
    const storedInsights = localStorage.getItem("pdfinsights");
    console.log("storedInsights", storedInsights);
    if (storedInsights) {
      setPdfInsights(JSON.parse(storedInsights));
    }
  }, []);

  useEffect(() => {
    console.log("pdfInsights", pdfInsights);
    if (pdfInsights) {
      localStorage.setItem("pdfinsights", JSON.stringify(pdfInsights));
    }
  }, [pdfInsights]);

  return (
    <main className="max-w-screen h-screen bg-primary-contrast flex flex-col items-center justify-start p-0 m-0">
      <Navbar />

      <div className="content mt-22 sm:px-10 flex flex-col items-center justify-center w-full gap-5">
        {responseGenerated ? (
          <Output response={response} pdfInsights={pdfInsights} />
        ) : (
          <Input
            pdfText={pdfText}
            description={description}
            setPdfText={setPdfText}
            setDescription={setDescription}
            setResponseGenerated={setResponseGenerated}
            setResponse={setResponse}
            setPdfInsights={setPdfInsights}
          />
        )}
      </div>
    </main>
  );
}

export default App;
