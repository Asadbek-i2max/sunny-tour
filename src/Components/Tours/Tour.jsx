import './tour.css';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';
import { Link } from 'react-router-dom';

export const Tour = () => {
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <div className="tours_all">
        <h2 className="tour_title">
          {translations[selectedLanguage].popular} <br />
          <span>{translations[selectedLanguage].tours}</span>
        </h2>
        <Link to="/tour-detail">View Details</Link>
        <div className="wrapper">
          <div className="tour_card">
              <div className="card_title">
                {translations[selectedLanguage].stanbul},
                <span>{translations[selectedLanguage].turkeye}</span>
              </div>
              <div className="card_price">700$</div>
            </div>
          <div className="tour_card">
            <div className="card_title">
              {translations[selectedLanguage].stanbul},{' '}
              <span>{translations[selectedLanguage].turkeye}</span>
            </div>
            <div className="card_price">1200$</div>
          </div>
          <div className="tour_card">
            <div className="card_title">
              {translations[selectedLanguage].cairo},{' '}
              <span>{translations[selectedLanguage].egypt}</span>
            </div>
            <div className="card_price">1000$</div>
          </div>
          <div className="tour_card">
            <div className="card_title">
              {translations[selectedLanguage].bali},{' '}
              <span>{translations[selectedLanguage].ind}</span>
            </div>
            <div className="card_price">2000$</div>
          </div>
          <div className="tour_card">
            <div className="card_title">
              {translations[selectedLanguage].dubai},{' '}
              <span>{translations[selectedLanguage].oae}</span>
            </div>
            <div className="card_price">1000$</div>
          </div>
          <div className="tour_card">
            <div className="card_title">
              {translations[selectedLanguage].dhabi},{' '}
              <span>{translations[selectedLanguage].oae}</span>
            </div>
            <div className="card_price">1200$</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
