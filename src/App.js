import { useState } from 'react';
import './App.css';
import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import ja from './ja.json';

function App() {
  const languages = {
    en: { label: 'English', translations: en },
    fr: { label: 'French', translations: fr },
    es: { label: 'Spanish', translations: es },
    ja: { label: 'Japnese', translations: ja }
  };

  const [lang, setLang] = useState('en');
  const translations = languages[lang].translations;

  const userName = 'John Doe';
  const userAvatar = 'https://randomuser.me/api/portraits/men/32.jpg';

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="App">
      {/* User Info Bar */}
      <div className="user-info-bar">
        <img src={userAvatar} alt="User avatar" className="user-avatar" />
        <div>
          <div className="user-name">{userName}</div>
          <div className="user-welcome">{translations.user?.welcome}</div>
          <div className="user-welcome">{translations.user?.time}</div>
        </div>
        <div className="header-right">
          <div className="lang-select-row">
            <label htmlFor="lang-select" className="lang-select-label">Select Language:</label>
            <select id="lang-select" value={lang} onChange={handleLangChange} className="lang-select">
              {Object.entries(languages).map(([key, value]) => (
                <option key={key} value={key}>{value.label}</option>
              ))}
            </select>
          </div>
          <button className="user-profile-btn">
            {translations.user?.profile}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="greeting-title">{translations.greeting}</h2>
        <p className="about-text">{translations.about}</p>
        <p className="description-text">{translations.description}</p>
        <ul className="features-list">
          <li>{translations.features}</li>
        </ul>
        <div className="tips-box">
          {translations.tips}
        </div>
        <div className="motivation-box">
          {translations.motivation}
        </div>
        <div className="motivation-box">
          {translations.newTip}
        </div>
      </div>
    </div>
  );
}

export default App;
