import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import AIChat from "../components/AIChat";
import { initialSelected } from "../data/languagesData";

function EditorPage() {
  const [code, setCode] = useState(initialSelected.demoCode);
  const [input, setInput] = useState("");
  const props = {code,setCode,input,setInput};

  return (
    <div className="flex flex-col justify-center items-center w-screen">
        <CodeEditor {...props}/>
        <AIChat {...props}/>
    </div>
  );
}

export default EditorPage;
