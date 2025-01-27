import React from 'react';

function Language({ language, changeLanguage }) {
  const languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Java", value: "java" },
    { name: "Python", value: "python" },
    { name: "C++", value: "cpp" },
  ];

  return (
    <div className='lan'>
      <label htmlFor="language-select">Choose a language:</label>
      <select
        id="language-select"
        name="language"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lang, index) => (
          <option key={index} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Language;
