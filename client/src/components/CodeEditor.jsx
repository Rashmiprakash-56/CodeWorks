import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import languagesData, { initialSelected } from "../data/languagesData";
import loader from "../assets/180-ring-with-bg.svg";

const api_url = import.meta.env.VITE_API_URL;

function CodeEditor() {
  const [code, setCode] = useState(initialSelected.demoCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Your output will be displayed here");
  const [selected, setSelected] = useState(initialSelected);
  const [fontSize, setFontSize] = useState(18);
  const [isLoading, setIsLoading] = useState(false);

  const editorOptions = {
    fontSize: fontSize,
    scrollBeyondLastLine: false,
  };

  const handleRun = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${api_url}/execute-code`, {
        language: selected.language,
        version: selected.version,
        code,
        input,
      });

      if(!response) console.log("error");
      console.log(response);
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("Error running code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitChange = (e) => {
    const newLang = e.target.value;
    const newSelected = languagesData.find((l) => l.language === newLang);
    setSelected(newSelected);
    setCode(newSelected.demoCode);
  };

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  return (
    <div className="w-screen min-h-screen h-dvh flex flex-col md:flex-row md:px-4 justify-center items-center">
      <div className="flex flex-col justify-center p-3 h-5/6 w-full md:w-3/6">
        <div className="flex justify-between w-full ">
          <select
            name="language"
            id="language"
            onChange={handleSubmitChange}
            className=" border rounded m-0 py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"
          >
            {languagesData.map((language) => (
              <option key={language.language} value={language.language}>
                {language.select}
              </option>
            ))}
          </select>
          <input
            type="range"
            id="fontSizeSlider"
            min="12"
            max="30"
            step="1"
            value={fontSize}
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
            className=" gap-2 w-1/5 mr-4"
          />
        </div>

        <div className="h-full w-auto ">
          <Editor
            options={editorOptions}
            theme="vs-dark"
            language={selected.displayName}
            defaultLanguage="cpp"
            value={code}
            onChange={handleEditorChange}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between p-3 h-5/6 w-full md:w-3/6 ">
        <div className="h-1/2 mb-4">
          <p className="text-gray-700 font-semibold mb-2">Output:</p>
          <div
            className="w-full h-full bg-[#1e293b] rounded-md text-white font-normal overflow-y-auto p-1"
            style={{ fontSize: `${fontSize}px` }}
          >
            {output}
          </div>
        </div>
        <div className="pt-2">
          <p className="text-gray-700 font-semibold mt-2">Input:</p>
          <textarea
            className="bg-gray-200 border  overflow-hidden border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your input here "
            name="inputs"
            id="inputs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            cols="40"
          />
        </div>

        <div className="flex space-x-4 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleRun}
          >
            {isLoading ? <img src={loader} alt="loader" /> : "RUN"}
          </button>
          <button
            onClick={() => alert("Will be available Soon")}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
