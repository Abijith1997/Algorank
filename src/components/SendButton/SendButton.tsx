import { useEffect, useState } from "react";
import { GeminiCompare } from "../../functions/GeminiCompare";
import type { SendButtonProps } from "../../types/types";

export const SendButton = ({
  pdfText,
  description,
  setResponseGenerated,
  setResponse,
}: SendButtonProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("description", description, description.length);
  }, [description]);

  return (
    <button
      className={`group relative text-white/90 font-semibold px-12 py-4 hover:shadow-lg transition-all bg-black/90 duration-300 ease-out ${
        !description || description.length === 0
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-xl cursor-pointer hover:bg-black"
      } ${loading ? "animate-pulse" : ""}}`}
      onClick={() =>
        GeminiCompare({
          pdfText,
          description,
          setLoading,
          setResponseGenerated,
          setResponse,
        })
      }
      disabled={!description || description.length === 0 || loading}
    >
      Send Request
    </button>
  );
};
