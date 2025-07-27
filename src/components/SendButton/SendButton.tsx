import { useState } from "react";
import { GeminiCompare } from "../../functions/GeminiCompare";
import type { SendButtonProps } from "../../types/types";

export const SendButton = ({
  url,
  pdfText,
  description,
  setResponseGenerated,
  responseGenerated,
}: SendButtonProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
      onClick={() =>
        GeminiCompare({
          url,
          pdfText,
          description,
          setLoading,
          setResponseGenerated,
        })
      }
      disabled={loading}
    >
      Send Request
    </button>
  );
};
