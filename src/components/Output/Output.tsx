import type { OutputProps } from "../../types/types";
import { ResumeHighlight } from "../ResumeHighlight/ResumeHighlight";
import { Scorecard } from "./components/Scorecard";

export const Output = ({ response, pdfInsights }: OutputProps) => {
  return (
    <div className="w-full h-full">
      <div className="container w-full shadow-lg px-2 lg:px-5 py-5 lg:py-10 sm:border-1 border-black/5 flex items-center justify-center gap-3 flex-col">
        <Scorecard response={response} />
        <ResumeHighlight pdfInsights={pdfInsights} />
      </div>
    </div>
  );
};
