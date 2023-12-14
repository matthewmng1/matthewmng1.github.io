import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About';

import './App.css';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-main'>
        <Main/>
      </div>
      <div className='app-container'> 
        <div className='app-nav'>
          <Navigation/>
        </div>
        <div className='app-content'>
          <div className='app-about'>
            <About/>
          </div>
          <div className='app-skills'>
            <Skills/>
          </div>
          <div className='app-portfolio'>
            <Portfolio/>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;