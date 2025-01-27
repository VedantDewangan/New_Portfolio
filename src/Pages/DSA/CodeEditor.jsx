import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import Language from './Language';
import Output from './Output';

function CodeEditor() {
  const editorRef = useRef();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');

  const defaultValues = {
    javascript: "// JavaScript code\nconsole.log('Hello, World!');",
    java: `// Java code\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
    python: "# Python code\nprint('Hello, World!')",
    cpp: `// C++ code\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, World!";\n  return 0;\n}`,
  };

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(defaultValues[newLanguage]); // Update the editor's code content based on the selected language
  };

  return (
    <div>
      <div style={{
        display:"flex",
        justifyContent:"space-around"
      }} >
       <div>
       <Language language={language} changeLanguage={handleLanguageChange} />
      <Editor
        height="73vh"
        width={'48vw'}
        language={language}
        value={code}
        theme="vs-dark"
        onChange={(newCode) => setCode(newCode || '')}
        onMount={handleEditorMount}
      />
       </div>
      <Output value={code} language={language} />
      </div>
    </div>
  );
}

export default CodeEditor;
