import './navbar.css';
import { useState } from 'react';

export const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ru');
    } else if (language === 'ru') {
      setLanguage('uz');
    } else {
      setLanguage('en');
    }
  };
  return (
    <>
      <header className="header">
      <div className="logo-container">
        <span className="logo">Sunny Tour</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Tours</li>
          <li className="nav-item">Gallery</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <button className="language-button" onClick={toggleLanguage}>
        {language === 'en' ? 'EN' : language === 'ru' ? 'RU' : 'UZ'}
      </button>
    </header>
    </>
  );
};

export default Navbar;
