import { useRef, useState } from "react";
import { handleUpload } from "../../../functions/handleUpload";
import { Upload as UploadSvg } from "lucide-react";
import type { ResumeUploadProps } from "../../../types/types";

export const ResumeUploader = ({
  setPdfText,
  setPdfInsights,
}: ResumeUploadProps) => {
  const defaultText = "Supports PDF files up to 10MB";
  const buttonText = ["Upload resume", "Replace resume"];
  const [fileName, setFileName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="text-center lg:border-r-1 lg:border-r-[#00000033] flex flex-col items-center justify-center p-5 gap-5 h-full">
      <h2 className="text-3xl font-bold bg-clip-text text-black">
        Upload Your Resume
      </h2>
      <p className="text-black/70 text-lg max-w-md">
        Get instant analysis and insights to improve your resume
      </p>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={(e) =>
          handleUpload({ e, setPdfText, setFileName, setPdfInsights })
        }
        accept=".pdf"
      />
      <button
        className="cursor-pointer group relative bg-black/80 text-white/80 hover:bg-black/90 hover:shadow-xl hover:text-white font-semibold px-12 py-4 transition-all duration-300 ease-out"
        onClick={() => inputRef.current?.click()}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">
            {fileName.length > 0 ? buttonText[1] : buttonText[0]}
          </span>

          <UploadSvg
            size={24}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </button>
      <p className="text-black/70 text-sm">
        {fileName.length > 0 ? fileName : defaultText}
      </p>
    </div>
  );
};
