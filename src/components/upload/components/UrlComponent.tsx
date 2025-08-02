import { useEffect, useState } from "react";

interface UrlComponentProps {
  setDescription: (value: string) => void;
}

export const UrlComponent = ({ setDescription }: UrlComponentProps) => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [scrapedJobText, setScrapedJobText] = useState<string | undefined>("");
  const [urlError, setUrlError] = useState<string | undefined>("");

  const handleUrlBlur = async () => {
    console.log("handleUrlBlur called");

    // Basic URL check
    if (!url) {
      return;
    }

    if (url && !url.startsWith("http")) {
      setUrlError("Please enter a valid URL starting with http or https.");
      return;
    }

    try {
      setLoading(true);
      setUrlError(""); // Clear any previous error

      const res = await fetch("http://localhost:4000/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        // If backend responds with error, show it
        const message = data?.error || "Something went wrong with scraping.";
        console.error("Scraping error:", message);
        setUrlError(message);
        return;
      }

      if (data?.content) {
        setScrapedJobText(data.content);
        setDescription(data.content);
        setUrlError(""); // Clear error if success
      } else {
        setUrlError("No content was scraped from the page.");
      }
    } catch (err) {
      console.error("Unexpected scraping failure:", err);
      setUrlError("Scraping failed. Please try another link.");
    } finally {
      setLoading(false);
      console.log("Scraping finished");
    }
  };

  useEffect(() => {
    console.log("scrapedJobText:", scrapedJobText);
  }, [scrapedJobText]);

  return (
    <div className="flex gap-5 flex-col items-center justify-center w-[90%]">
      <label htmlFor="job-url" className="text-center">
        <h2 className="text-3xl font-bold text-black">Job Page URL</h2>
      </label>

      <input
        type="url"
        id="job-url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        onBlur={handleUrlBlur}
        placeholder="https://example.com/job-posting"
        className={`w-full px-4 py-2 border-2 border-black/70 focus:outline-none focus:ring-black/90 placeholder:text-black/50 ${
          urlError ? "border-red-500" : ""
        } ${loading ? "animate-pulse" : ""}`}
      />
      {loading && <span>Parsing the url link</span>}
      {urlError && (
        <p>
          <span className="text-red-500">{urlError}</span>
        </p>
      )}
    </div>
  );
};
