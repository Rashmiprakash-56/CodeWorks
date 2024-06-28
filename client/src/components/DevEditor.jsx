import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import stretch from '../assets/icons8-stretch-tool-stickers-16.png';

function DevEditor(props) {
  const { language, displayName = "hii", value, onChange } = props;
  const [open,setOpen] = useState(true);

  const handleChange = (editor, data, value) => onChange(value);

  return (
    <div className={`flex ${open ? 'flex-grow' : 'flex-grow-0'} basis-0 flex-col p-2`}>
      <div className="flex justify-between text-white bg-gray-700 px-1 py-1 rounded-t-md">
        {displayName}
        <button className="bg-none cursor-pointer
        "
        onClick={() => setOpen(prevOpen => !prevOpen)}
        ><img src={stretch} alt="" className="ml-[0.5rem] min-h-[16px] min-w-[16px]"/>
        </button>
      </div>

      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className={`flex-grow rounded-b-md overflow-hidden ${open ? '' : 'collapsed' }`}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default DevEditor;
