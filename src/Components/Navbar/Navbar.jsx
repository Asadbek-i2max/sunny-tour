import './navbar.css';
import { BiSolidPlaneTakeOff } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';

export const Navbar = () => {
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
              <BiWorld className="lang_icon"></BiWorld>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
