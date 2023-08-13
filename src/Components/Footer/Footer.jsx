import './footer.css';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';

export const Footer = () => {
  const { selectedLanguage } = useLanguage();
  const handleFacebook = () => {
    window.location.href = 'https://www.facebook.com/sunny.tour.uz/';
  };
  const handleInstagram = () => {
    window.location.href = 'https://www.instagram.com/sunnytouruz/';
  };
  const handleTelegram = () => {
    window.location.href = 'https://t.me/+ZpDKmpMmXws4ZTVi';
  };
  return (
    <>
      <div className="footer_all">
        <div className="footer_top">
          <h2 className="big_txt">
            {translations[selectedLanguage].about}<span> {translations[selectedLanguage].us}</span>
          </h2>
          <p className="small_txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officia commodi sint vero atque doloribus amet eum,
            dolores nulla facilis illum ratione tenetur ex cum
            molestiae rem, iure minima. Similique, earum.
            <br />
            <span>{translations[selectedLanguage].number} +998 90 333 12 00</span>
          </p>
        </div>
        <div className="footer_bottom">
          <div className="flw_con">
            <div className="flw_title">
              {translations[selectedLanguage].flw}<span> {translations[selectedLanguage].flwUs}</span>
            </div>
            <div className="icons_con">
              <FaFacebook
                className="flw_icon"
                onClick={handleFacebook}
              ></FaFacebook>
              <FaInstagram
                className="flw_icon"
                onClick={handleInstagram}
              ></FaInstagram>
              <FaTelegram
                className="flw_icon"
                onClick={handleTelegram}
              ></FaTelegram>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
