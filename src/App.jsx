import './App.css';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import { Tour } from './Components/Tours/Tour';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Tour></Tour>
    </>
  )
}

export default App