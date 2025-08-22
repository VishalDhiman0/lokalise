import logo from './logo.svg';
import './App.css';
import en from './en.json';
import fr from './fr.json';
import es from './es.json';

import React, { useState } from 'react';

function App() {
  const languages = {
    en: { label: 'English', translations: en },
    fr: { label: 'French', translations: fr },
    es: { label: 'Spanish', translations: es }
  };

  const [lang, setLang] = useState('en');
  const translations = languages[lang].translations;

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{margin: '20px 0'}}>
          <label htmlFor="lang-select" style={{marginRight: '10px'}}>Select Language:</label>
          <select id="lang-select" value={lang} onChange={handleLangChange}>
            {Object.entries(languages).map(([key, value]) => (
              <option key={key} value={key}>{value.label}</option>
            ))}
          </select>
        </div>
        <p>{translations.greeting}</p>
        <p>{translations.about}</p>
        <p>{translations.description}</p>
        <p>{translations.features}</p>
      </header>
    </div>
  );
}

export default App;
