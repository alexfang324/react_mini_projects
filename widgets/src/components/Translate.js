import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: 'English', value: 'en' },
  { label: 'Mandarin', value: 'zh' },
  { label: 'French', value: 'fr' },
  { label: 'Spanish', value: 'es' }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label={'Select a language'}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
