import React, {useState}from "react";
import CodeEditor from "../components/CodeEditor";

function EditorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
        <CodeEditor/>
    </div>
  );
}

export default EditorPage;
