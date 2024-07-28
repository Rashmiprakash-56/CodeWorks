import React, { useState, useRef, useEffect } from "react";
import model from "../services/gemini";
import Markdown from "react-markdown";

function AIChat({ code, input }) {
  const [includeCode, setIncludeCode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [ans, setAns] = useState("I am ready to help!");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handlePrompt = async () => {
    let prompt = inputValue;
    if (includeCode) {
      prompt += `\n\nThis is my input:\n${input}\n\nThis is my code:\n${code}`;
    }

    const result = await model.generateContentStream(prompt);
    let response = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      response += chunkText;
      setAns(response);
    }
    console.log(ans);
  };

  const handleReset = () => {
    setIncludeCode(false);
    setAns("I am ready to help!");
    setInputValue("");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row justify-center items-center p-4 bg-gray-300">
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">CodeAI</h1>
        <textarea
          ref={textareaRef}
          placeholder="Ask anything...."
          name="input"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeCode}
            onChange={(e) => setIncludeCode(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700 flex items-center space-x-1">
            <span>Include your code in the prompt</span>
          </label>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <button
            onClick={handlePrompt}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Ask AI
          </button>
          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Reset
          </button>
        </div>
        <div className="overflow-auto min-h-40 p-4 bg-slate-700 text-white rounded-lg shadow w-full markdown-content">
          <Markdown>{ans}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
