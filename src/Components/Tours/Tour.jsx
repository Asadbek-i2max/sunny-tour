import './tour.css';

export const Tour = () => {
  return (
    <>
      <div className='tours_all'>
        <h2 className='tour_title'>
          Most Popular <br />
          <span>Tours</span>
        </h2>
        <div className='wrapper'>
          <div className='tour_card'>
            <div className='card_title'>Istanbul, <span>Turkeye</span></div>
            <div className='card_price'>700$</div>
          </div>
          <div className='tour_card'>
            <div className='card_title'>Antalya, <span>Turkeye</span></div>
            <div className='card_price'>1200$</div>
          </div>
          <div className='tour_card'>
            <div className='card_title'>Kairo, <span>Egypt</span></div>
            <div className='card_price'>1000$</div>
          </div>
          <div className='tour_card'>
            <div className='card_title'>Bali, <span>Indonesia</span></div>
            <div className='card_price'>2000$</div>
          </div>
          <div className='tour_card'>
            <div className='card_title'>Dubai, <span>OAE</span></div>
            <div className='card_price'>1000$</div>
          </div>
          <div className='tour_card'>
            <div className='card_title'>Abu-Dhabi, <span>OAE</span></div>
            <div className='card_price'>1200$</div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
