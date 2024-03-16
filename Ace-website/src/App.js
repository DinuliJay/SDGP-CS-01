import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Rout from './Components/Login/rout'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Contact/>
      <BrowserRouter>
      <Rout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
