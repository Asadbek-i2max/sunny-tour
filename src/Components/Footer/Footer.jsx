import './footer.css';
import { BsFillSendFill } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="footer_con">
      <div className="footer_wrapper">
        <div className="top_part">
          {/* <div className="text_con"> */}
          <div className="text_inner">
            <span className="t1">KEEP IN TOUCH</span>
            <span className="t2">Travel with us</span>
          </div>
          <div className="input_inner">
            <input
              placeholder="Enter Email Address"
              className="email_input"
            ></input>
            <button className="email_btn">
              <span>SEND</span>
              <BsFillSendFill className="send_icon"></BsFillSendFill>
            </button>
          </div>
          {/* </div> */}
        </div>
        <div className="middle_part">
          <div className="footer_card">
            <div className="first_half">
              <div className="logo_part">
                <MdOutlineTravelExplore className="footer_l_icon"></MdOutlineTravelExplore>
                <span className="logo_t">Travel.</span>
              </div>
              <div className="footer_desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Necessitatibus dolorum amet mollitia, doloribus
                ex vel veniam quaerat debitis, qui ullam quis
                molestiae eius. Reiciendis libero eos ea sunt sapiente
                molestiae natus incidunt mollitia maiores ab.
              </div>
              <div className="brand">
                <AiFillFacebook className="brand_icon"></AiFillFacebook>
                <AiFillInstagram className="brand_icon"></AiFillInstagram>
                <AiFillTwitterCircle className="brand_icon"></AiFillTwitterCircle>
                <AiFillYoutube className="brand_icon"></AiFillYoutube>
              </div>
            </div>
            <div className="secondHalf">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95939.97163859927!2d69.2256768!3d41.2844032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1690566539303!5m2!1sen!2s"
                loading="lazy"
                width="600"
                height="200"
              ></iframe>
            </div>
          </div>
          <div className="footer_bottom">
            <span className="copyright">
              COPYRIGHTS RESERVED 2023
            </span>
              <ul className="ul">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
