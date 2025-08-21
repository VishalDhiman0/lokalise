import logo from './logo.svg';
import './App.css';
import en from './en.json';
import fr from './fr.json';

import React, { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');
  const translations = lang === 'en' ? en : fr;

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{translations.greeting}</p>
        <button onClick={toggleLang} style={{marginTop: '20px'}}>
          {translations.toggle}
        </button>
        <p>{translations.about}</p>
      </header>
    </div>
  );
}

export default App;
