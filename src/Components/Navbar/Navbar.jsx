import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiGlobe } from 'react-icons/fi';

export const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <navbar className="navbar_all">
          <div className="logo_part">
            <MdOutlineTravelExplore className="logo_icon"></MdOutlineTravelExplore>
            <h2 className="title">Travel</h2>
          </div>
          <div className="navigation">
            <ul className="nav_items">
              <li className="nav_item">
                <a href="#">Tours</a>
              </li>
              <li className="nav_item">
                <a href="#">About</a>
              </li>
              <li className="nav_item">
                <a href="#">Posts</a>
              </li>
              <li className="nav_item">
                <a href="#">Gallery</a>
              </li>
              <li className="nav_item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="langPart">
            <FiGlobe className="globe_icon"></FiGlobe>
          </div>
        </navbar>
      </div>
    </>
  );
};

export default Navbar;
