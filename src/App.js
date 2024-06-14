import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <>
    <Header />
    
    
    <main className='main'>
      <Home />
      <Sobre />
      <Skills />
    </main>
    </>
  )
  

}

export default App;
