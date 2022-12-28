import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  const [language, setLanguage] = useState('english');
  const [color, setColor] = useState('blue');

  const onLanguageChange = (language) => {
    setLanguage(language);
    language === 'english' ? setColor('blue') : setColor('red');
  };

  return (
    //Hook up context object by wrapping parent component with the relevant
    //<Context.Provider /> and pass the context value. You can stack on multiple context
    //providers here.
    <div className="ui container">
      <div>
        Select a Language:
        <i className="flag us" onClick={() => onLanguageChange('english')} />
        <i className="flag cn" onClick={() => onLanguageChange('chinese')} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value={color}>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
