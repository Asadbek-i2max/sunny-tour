import './navbar.css';
import { BiSolidPlaneTakeOff } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';
import { useState } from 'react';

export const Navbar = () => {
  const { setSelectedLanguage } = useLanguage();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageOptions(false);
  };
  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  }
  return (
    <>
      <div className="header_all">
        <header className="header">
          <div className="login_container">
            <BiSolidPlaneTakeOff className="logo_icon"></BiSolidPlaneTakeOff>
            <h2 className="logo_text">
              <span>Sunny</span>
              Tour
            </h2>
          </div>
          <div className="contact_container">
            <div className="number">
              <BiPhoneCall className="number_icon"></BiPhoneCall>
              <span>+998 90 333 12 00</span>
            </div>
            <div className='lang_part'>
              <BiWorld className="lang_icon" onClick={toggleLanguageOptions}></BiWorld>
              {showLanguageOptions && (<div className="language_options">
                {Object.keys(translations).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
