import './App.css';
// import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
// import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';
import { Tour } from './Components/Tours/Tour';
import { Footer } from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Tour></Tour>
      <Footer></Footer>
    </>
  )
}

export default App