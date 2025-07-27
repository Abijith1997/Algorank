interface JobDescriptionProps {
  description: string;
  setDescription: (value: string) => void;
}

export const JobDescription = ({
  description,
  setDescription,
}: JobDescriptionProps) => {
  return (
    <>
      <label htmlFor="job-desc" className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Paste Job Description
        </h2>
      </label>

      <textarea
        id="job-desc"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Paste job description here..."
        rows={10}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/20"
      />
    </>
  );
};
