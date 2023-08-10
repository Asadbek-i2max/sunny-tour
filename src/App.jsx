import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import { Tour } from './Components/Tours/Tour';
import Benefit from './Components/Benefit/Benefit';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Tour></Tour>
      <Benefit></Benefit>
    </>
  );
};

export default App;
