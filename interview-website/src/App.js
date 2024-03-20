import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Form from './Components/Quiz';
import Rout from './Components/Login/rout';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';


export default function App() {
  return (

    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Contact/>
      <BrowserRouter>
      <Rout/>
      </BrowserRouter>
      <Form />
      
    </div>
  );
}
