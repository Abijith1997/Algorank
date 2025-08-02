import { ResumeUploader } from "./components/ResumeUploader";
import { JobComponent } from "./components/JobComponent";
import type { UploadProps } from "../../types/types";

export const Upload = ({
  setPdfText,
  setDescription,
  description,
  setPdfInsights,
}: UploadProps) => {
  return (
    <div className="relative bg-primary-contrast shadow-2xl flex py-5 lg:flex-row flex-col">
      <div className="flex items-center justify-center lg:w-1/2 px-4">
        <ResumeUploader
          setPdfText={setPdfText}
          setPdfInsights={setPdfInsights}
        />
      </div>
      <div className="flex items-center justify-center lg:w-1/2 px-4">
        <JobComponent
          setDescription={setDescription}
          description={description}
        />
      </div>
    </div>
  );
};
