import './benefit.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { FaShieldHalved } from 'react-icons/fa6';
import { FaClipboardCheck } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa6';

const Benefit = () => {
  return (
    <>
      <div className="benefit_all">
        <div className="first_half">
          <div className="card"></div>
        </div>
        <div className="second_half">
          <h2 className="benefit_title">Reservations <span>Center</span></h2>
          <div className="wrapper">
            <div className="bf_card">
              <BsFillBriefcaseFill className="card_icon"></BsFillBriefcaseFill>
              <div className="title">The Best Deals</div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eum, totam.
              </div>
            </div>
            <div className="bf_card">
              <BiHeadphone className="card_icon"></BiHeadphone>
              <div className="title">24/7, Customer Service</div>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Similique, dignissimos expedita.
              </div>
            </div>
            <div className="bf_card">
              <BiBadgeCheck className="card_icon"></BiBadgeCheck>
              <div className="title">Biggest/Best Selection</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quod, harum.
              </div>
            </div>
            <div className="bf_card">
              <FaShieldHalved className="card_icon"></FaShieldHalved>
              <div className="title">Secure/Simple</div>
              <div className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Nihil, voluptatem!
              </div>
            </div>
            <div className="bf_card">
              <FaClipboardCheck className="card_icon"></FaClipboardCheck>
              <div className="title">Immediate Booking</div>
              <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, animi!</div>
            </div>
            <div className="bf_card">
              <FaClipboardList className="card_icon"></FaClipboardList>
              <div className="title">Travel Insights</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laborum, dicta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
