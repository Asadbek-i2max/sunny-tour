import './benefit.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { FaShieldHalved } from 'react-icons/fa6';
import { FaClipboardCheck } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';
const Benefit = () => {
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <div className="benefit_all">
        <div className="first_half">
          <div className="card"></div>
        </div>
        <div className="second_half">
          <h2 className="benefit_title">{translations[selectedLanguage].res}<span> {translations[selectedLanguage].centre}</span></h2>
          <div className="wrapper">
            <div className="bf_card">
              <BsFillBriefcaseFill className="card_icon"></BsFillBriefcaseFill>
              <div className="title">{translations[selectedLanguage].one}</div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eum, totam.
              </div>
            </div>
            <div className="bf_card">
              <BiHeadphone className="card_icon"></BiHeadphone>
              <div className="title">{translations[selectedLanguage].two}</div>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Similique, dignissimos expedita.
              </div>
            </div>
            <div className="bf_card">
              <BiBadgeCheck className="card_icon"></BiBadgeCheck>
              <div className="title">{translations[selectedLanguage].three}</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quod, harum.
              </div>
            </div>
            <div className="bf_card">
              <FaShieldHalved className="card_icon"></FaShieldHalved>
              <div className="title">{translations[selectedLanguage].four}</div>
              <div className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Nihil, voluptatem!
              </div>
            </div>
            <div className="bf_card">
              <FaClipboardCheck className="card_icon"></FaClipboardCheck>
              <div className="title">{translations[selectedLanguage].five}</div>
              <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, animi!</div>
            </div>
            <div className="bf_card">
              <FaClipboardList className="card_icon"></FaClipboardList>
              <div className="title">{translations[selectedLanguage].six}</div>
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
