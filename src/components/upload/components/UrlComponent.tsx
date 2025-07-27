interface UrlComponentProps {
  setUrl: (value: string) => void;
  url: string;
}

export const UrlComponent = ({ setUrl, url }: UrlComponentProps) => {
  return (
    <div className="flex gap-5 flex-col items-center justify-center w-[90%]">
      <label htmlFor="job-url" className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Job Page URL
        </h2>
      </label>

      <input
        type="url"
        id="job-url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        placeholder="https://example.com/job-posting"
        className="w-[80%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/20"
      />
    </div>
  );
};
