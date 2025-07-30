import { useState } from "react";
import "./App.css";
// import { Application } from "./components/application/Application";
// import { Footer } from "./components/Bars/Footer";
import { Navbar } from "./components/Bars/Navbar";
import { Upload } from "./components/upload/Upload";
import { SendButton } from "./components/SendButton/SendButton";
import { Application } from "./components/application/Application";

function App() {
  const [pdfText, setPdfText] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [responseGenerated, setResponseGenerated] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  return (
    <main className="max-w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-start p-0 m-0 overflow-hidden">
      <Navbar />

      <div className="content mt-20 px-10 flex flex-col items-center justify-center w-full overflow-x-hidden gap-5 overflow-hidden">
        <div className="heading flex flex-col items-center justify-center w-full p-10 overflow-x-hidden">
          <h1 className="text-3xl font-bold text-white/80">
            Track your Applications and Resume Ratings
          </h1>
        </div>
        {responseGenerated ? (
          <Application />
        ) : (
          <div className="upload-container sm:w-[80%] lg:w-full flex flex-col items-center justify-center overflow-x-hidden ">
            <Upload
              setPdfText={setPdfText}
              url={url}
              setUrl={setUrl}
              setDescription={setDescription}
              description={description}
            />
          </div>
        )}
        <SendButton
          url={url}
          pdfText={pdfText}
          description={description}
          setResponseGenerated={setResponseGenerated}
          responseGenerated={responseGenerated}
        />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
