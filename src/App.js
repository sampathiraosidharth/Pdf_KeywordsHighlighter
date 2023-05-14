import { useState } from "react";
import React from "react";
import Nav from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  const [files, setFiles] = useState([]);
  const [keywords, setKeywords] = useState("");

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
  };

  const handleKeywordChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleHighlightClick = () => {
    const formData = new FormData();
    formData.append("keywords", keywords);
    files.forEach((file) => {
      formData.append("file", file);
    });

    fetch("/highlight", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        data.pdf_data.forEach((pdfData) => {
          const pdfWindow = window.open("");
          pdfWindow.document.write(
            `<iframe src="data:application/pdf;base64,${pdfData}" width="100%" height="100%"></iframe>`
          );
        });
      })
      .catch((error) => {
        console.error("Error highlighting PDF:", error);
      });
  };

  return (
    <>
    <section>
      {Nav()}
    </section>
      <section className="">
        <div className="flex flex-col items-center h-screen bg-gray-100 m-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h1 className="text-4xl font-bold mb-2">Highlight PDF</h1>
          <label className="block mb-4">
            <span className="text-gray-700 text-lg">PDF Files:</span>
            <input
              id="file-input"
              type="file"
              multiple
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="block mb-4 ">
            <span className="text-gray-700 text-lg">Keywords:</span>
            <input
              id="keyword-input"
              type="text"
              value={keywords}
              onChange={handleKeywordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <button
            onClick={handleHighlightClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Highlight
          </button>
        </div>
        <section className="relative top-20">{Footer()}</section>
      </div></section>
      
    </>
  );
}

export default App;
