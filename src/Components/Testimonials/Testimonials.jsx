import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './testimonials.css';
import { useLanguage } from '../../context/LanguageProvider';
import translations from '../../translations';
export const Testimonials = () => {
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <div className="tst_all">
        <div className="tst_title">{translations[selectedLanguage].client}<span> {translations[selectedLanguage].testi}</span></div>
        <div className='full_con'>
        <Carousel showThumbs={false} showArrows={true}>
          <div className='carousel_con'>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit, dolor?
            </p>
            <p className="author">~Avazbek Makhmudov</p>
          </div>
          <div className='carousel_con'>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Est quo fuga magnam corporis quidem recusandae?
            </p>
            <p className="author">~Alisher</p>
          </div>
          <div className='carousel_con'>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Facilis, voluptatibus?
            </p>
            <p className="author">~Davron</p>
            </div>
          </Carousel>
          </div>
      </div>
    </>
  );
};

export default Testimonials;
