import "./App.css";
import { Application } from "./components/application/Application";
import { Footer } from "./components/Bars/Footer";
import { Navbar } from "./components/Bars/Navbar";
import { Sidebar } from "./components/Bars/Sidebar";
import { Upload } from "./components/upload/Upload";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 py-10 text-center ">
      <Navbar />
      <Sidebar />
      <div className="heading flex flex-col items-center justify-center w-full  p-10">
        <h1 className="text-3xl font-bold">
          Track your Applications and Resume Ratings
        </h1>
        <Upload />
        <Application />
      </div>
      <Footer />
    </main>
  );
}

export default App;
