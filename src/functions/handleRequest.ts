interface handleRequestProps {
  url: string;
}

export const handleRequest = async ({ url }: handleRequestProps) => {
  if (!url) {
    alert("Please enter a valid URL");
    return;
  }
  if (url.includes("linkedin.com")) {
    console.log("linkedin");
    return;
  }

  try {
    console.log("waiting for response");
    const response = await fetch("http://localhost:4000/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error: ${errorData.error || "Failed to scrape"}`);
      return;
    }

    const data = await response.json();
    console.log("Page title:", data.title);
    console.log("Page content:", data.content);

    // You can now save data.jobDescription to state or use it elsewhere
  } catch (error) {
    alert("Network or server error: " + error);
  }
};
