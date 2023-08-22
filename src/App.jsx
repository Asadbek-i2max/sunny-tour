import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import { Tour } from './Components/Tours/Tour';
import { TourDetail } from './Components/Tours/TourDetail/TourDetail';
import Benefit from './Components/Benefit/Benefit';
import Enquiry from './Components/Enquiry/Enquiry';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import { LanguageProvider } from './context/LanguageProvider';
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <>
          <Navbar></Navbar>
          <Main></Main>
          <Tour></Tour>
          <Routes>
            <Route path="/tour-detail" element={<TourDetail />} />
          </Routes>
          
          <Benefit></Benefit>
          <Gallery></Gallery>
          <Testimonials></Testimonials>
          <Enquiry></Enquiry>
          <Footer></Footer>
        </>
      </LanguageProvider>
    </Router>
  );
};

export default App;
