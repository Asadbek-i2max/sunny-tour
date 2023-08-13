import './enquiry.css';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';
const Enquiry = () => {
  const handleEnquiry = () => {
    window.location.href = 'https://t.me/XusanHalmatov';
  };
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <div className="enquiry_con">
        <h2 className="enq_text">{translations[selectedLanguage].sp} <span>{translations[selectedLanguage].plans}.</span> {translations[selectedLanguage].here} <span> {translations[selectedLanguage].help}</span></h2>
        <button className="enq_btn" onClick={handleEnquiry}>{translations[selectedLanguage].enq}</button>
      </div>
    </>
  );
};

export default Enquiry;
