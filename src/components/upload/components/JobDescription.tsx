import { useState } from "react";

interface JobDescriptionProps {
  description: string;
  setDescription: (value: string) => void;
}

export const JobDescription = ({ setDescription }: JobDescriptionProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <label htmlFor="job-desc" className="text-center">
        <h2 className="text-3xl font-bold text-black/90">
          Paste Job Description
        </h2>
      </label>

      <textarea
        id="job-desc"
        onBlur={() => setDescription(input)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Paste job description here..."
        rows={10}
        className="w-full px-4 py-2 border-2 border-black/50 focus:outline-none focus:ring-black/80 placeholder:text-black/50"
      />
    </>
  );
};
