import './main.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

export const Main = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to <span>Sunny Tour</span></h1>
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
