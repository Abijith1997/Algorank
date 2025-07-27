import { ResumeUploader } from "./components/ResumeUploader";
import { JobComponent } from "./components/JobComponent";
import type { UploadProps } from "../../types/types";

export const Upload = ({
  setPdfText,
  url,
  setUrl,
  setDescription,
  description,
}: UploadProps) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl flex py-5 lg:flex-row flex-col">
      <div className="flex items-center justify-center lg:w-1/2 px-4">
        <ResumeUploader setPdfText={setPdfText} />
      </div>
      <div className="flex items-center justify-center lg:w-1/2 px-4">
        <JobComponent
          setUrl={setUrl}
          url={url}
          setDescription={setDescription}
          description={description}
        />
      </div>
    </div>
  );
};
