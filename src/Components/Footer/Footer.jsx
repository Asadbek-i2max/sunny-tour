import './footer.css';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';

export const Footer = () => {
  // Lang
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
            {translations[selectedLanguage].about}
            <span> {translations[selectedLanguage].us}</span>
          </h2>
          <p className="small_txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officia commodi sint vero atque doloribus amet eum,
            dolores nulla facilis illum ratione tenetur ex cum
            molestiae rem, iure minima. Similique, earum.
            <br />
            <span>
              {translations[selectedLanguage].number} +998 90 333 12
              00
            </span>
          </p>
        </div>
        <div className="footer_middle">
          <div className="middle_first_half">
            <h2 className="adr_txt">
              {translations[selectedLanguage].address}:<br />{' '}
              <span>{translations[selectedLanguage].fergana}</span>
            </h2>
            <h2 className="email_txt">
              {translations[selectedLanguage].email}: <br />
              <span>sunnytouruz@gmail.com</span>
            </h2>
          </div>
          <div className="middle_second_half">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48628.95181117201!2d71.74926193419239!3d40.37983287404785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2sFergana%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1691929116661!5m2!1sen!2s"
              loading="lazy"
              className="google_maps"
            ></iframe>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="flw_con">
            <div className="flw_title">
              {translations[selectedLanguage].flw}
              <span> {translations[selectedLanguage].flwUs}</span>
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
