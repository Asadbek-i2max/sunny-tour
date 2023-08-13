import './footer.css';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';

export const Footer = () => {
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
            About <span>Us</span>
          </h2>
          <p className="small_txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officia commodi sint vero atque doloribus amet eum,
            dolores nulla facilis illum ratione tenetur ex cum
            molestiae rem, iure minima. Similique, earum.
            <br />
            <span>Number: +998 90 333 12 00</span>
          </p>
        </div>
        <div className="footer_bottom">
          <div className="flw_con">
            <div className="flw_title">
              Follow <span>Us</span>
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
