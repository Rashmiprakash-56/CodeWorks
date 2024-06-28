import { useState, useEffect } from "react";
import DevEditor from "../components/DevEditor";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/javascript/javascript";

function DevPage() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
         <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
         </html>
       `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="flex h-[50vh] bg-gray-800">
        <DevEditor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <DevEditor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <DevEditor
          language="javascript"
          displayName="Javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="h-[50vh] bg-white">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          style={{ border: "none" }}
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default DevPage;
