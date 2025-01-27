import React, { useState } from "react";
import axios from "axios";

function Output({ value, language }) {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [load,SetLoad] = useState(false);

  const runCode = async () => {
    if (!value) {
      setOutput("No code to execute.");
      return;
    }

    const languageMap = {
      js: "javascript",
      java: "java",
      py: "python",
      cpp: "cpp",
    };
    SetLoad(true);
    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: languageMap[language] || language,
        version: "*",
        files: [
          {
            name: "code",
            content: value,
          },
        ],
      });

      if (response.data.run) {
        setOutput(response.data.run.output);
      } else {
        setOutput("No output received.");
      }
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || err.message}`);
    }
    SetLoad(false);
  };

  return (
    <div
      style={{
        width: "48vw",
        height: "73vh",
       
      }}
    >
      <div className="run-but">
        <button
          onClick={runCode}
        >
          {load?'Loading..':'Run Code'}
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#1E1E1E",
          height: "70vh",
          padding: "10px",
          color: `${error?"red":"white"}`,
          fontFamily: "monospace",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {error ? <div style={{ color: "red" }}>{error}</div> : output || "Output will appear here..."}
      </div>
    </div>
  );
}

export default Output;