import type { InputProps } from "../../types/types";
import { SendButton } from "../SendButton/SendButton";
import { Upload } from "../upload/Upload";

export const Input = ({
  setDescription,
  setPdfText,
  pdfText,
  description,
  setResponseGenerated,
  setResponse,
  setPdfInsights,
}: InputProps) => {
  return (
    <>
      <div className="heading flex flex-col items-center justify-center w-full px-10 py-5">
        <h1 className="text-3xl font-bold text-black">
          Track your Applications and Resume Ratings
        </h1>
      </div>
      <div className="upload-container sm:w-[80%] lg:w-full flex flex-col items-center justify-center">
        <Upload
          setPdfText={setPdfText}
          setDescription={setDescription}
          description={description}
          setPdfInsights={setPdfInsights}
        />
      </div>
      <SendButton
        pdfText={pdfText}
        description={description}
        setResponseGenerated={setResponseGenerated}
        setResponse={setResponse}
      />
    </>
  );
};
