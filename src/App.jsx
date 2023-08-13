import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import { Tour } from './Components/Tours/Tour';
import Benefit from './Components/Benefit/Benefit';
import Enquiry from './Components/Enquiry/Enquiry';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import { LanguageProvider } from './context/LanguageProvider';

const App = () => {
  return (
    <LanguageProvider>
      <>
      <Navbar></Navbar>
      <Main></Main>
      <Tour></Tour>
      <Benefit></Benefit>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Enquiry></Enquiry>
      <Footer></Footer>
    </>
    </LanguageProvider>
  );
};

export default App;
