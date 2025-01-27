import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ data }) => {
  const { heading, question, code , output } = data;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #121212',
        borderRadius: '10px',
        backgroundColor: '#101010',
        height: '80vh',
        overflowY: 'auto',
      }}
    >
      {/* Heading */}
      <h2 style={{ fontSize: '1.6rem', marginBottom: '10px', color: '#15d655' }}>
        {heading}
      </h2>

      {/* Question */}
      <p
        style={{
          fontSize: '1rem',
          marginBottom: '20px',
          opacity: 0.7,
          color: 'whitesmoke',
        }}
      >
        <strong>Question:</strong> {question || 'No question provided'}
        {output?
        <>
        <pre>
          {output}
        </pre>
        </>
        :null}
      </p>

      {code.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: '20px',
            borderRadius: '5px',
            position: 'relative',
          }}
        >

          <SyntaxHighlighter
            language={item.language || 'javascript'} // Default language is JavaScript
            style={vscDarkPlus}
            customStyle={{
              borderRadius: '5px',
              fontSize: '14px',
              marginBottom: '10px',
            }}
          >
            {item.code.trim()}
          </SyntaxHighlighter>

          <button
            onClick={() => copyToClipboard(item.code)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#15d655',
              opacity: 0.9,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Copy
          </button>

          <div
            style={{
              marginTop: '10px',
              fontSize: '0.9rem',
              color: 'whitesmoke',
              opacity: 0.7,
              display: 'flex',
              gap: '6px',
              flexDirection: 'column',
            }}
          >
            <p>
              <strong>Approach:</strong> {item.apporach}
            </p>
            <p>
              <strong>Time Complexity:</strong> {item.timeComplexity}
            </p>
            <p>
              <strong>Space Complexity:</strong> {item.spaceComplexity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeDisplay;
