import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import { Tour } from './Components/Tours/Tour';
import Benefit from './Components/Benefit/Benefit';
import Enquiry from './Components/Enquiry/Enquiry';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Tour></Tour>
      <Benefit></Benefit>
      <Enquiry></Enquiry>
    </>
  );
};

export default App;
