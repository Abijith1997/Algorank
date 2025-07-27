import { useRef, useState } from "react";
import { handleUpload } from "../../../functions/handleUpload";
import { Upload as UploadSvg } from "lucide-react";

interface ResumeUploadProps {
  setPdfText: (text: string) => void;
}

export const ResumeUploader = ({ setPdfText }: ResumeUploadProps) => {
  const defaultText = "Supports PDF files up to 10MB";
  const buttonText = ["Upload resume", "Replace resume"];
  const [fileName, setFileName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className=" text-center lg:border-r-1 lg:border-r-[#ffffff33] flex flex-col items-center justify-center p-5 gap-5 h-full">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Upload Your Resume
      </h2>
      <p className="text-gray-300 text-lg max-w-md">
        Get instant analysis and insights to improve your resume
      </p>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={(e) => handleUpload({ e, setPdfText, setFileName })}
        accept=".pdf"
      />
      <button
        className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
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

        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out"></div>
      </button>
      <p className="text-gray-400 text-sm">
        {fileName.length > 0 ? fileName : defaultText}
      </p>
    </div>
  );
};
