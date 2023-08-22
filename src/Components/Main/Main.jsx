import './main.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';

export const Main = () => {
  const { selectedLanguage } = useLanguage();
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{translations[selectedLanguage].welcome}<br/><span> {translations[selectedLanguage].sunnyTour}</span></h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/sunny.tour.uz/" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a href="https://www.instagram.com/sunnytouruz/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram></AiFillInstagram>
          </a>
          <a href="https://t.me/+ZpDKmpMmXws4ZTVi" target="_blank" rel="noopener noreferrer">
            <BsTelegram></BsTelegram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
