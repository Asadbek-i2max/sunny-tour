import './gallery.css';
import { AiFillInstagram } from 'react-icons/ai';

const Gallery = () => {
  return (
    <>
      <div className="gallery_all">
        <div className="gallery_con">
          <div className="top_part">
            <div className="image_card"></div>
            <div className="link_text">
              <h2 className="txt">
                <span>@Sunny</span>TourUz
              </h2>
              <AiFillInstagram className="icon"></AiFillInstagram>
            </div>
            <div className="image_card"></div>
          </div>
          <div className="bottom_part">
            <div className="image_card"></div>
            <div className="image_card"></div>
            <div className="image_card"></div>
            <div className="image_card"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
