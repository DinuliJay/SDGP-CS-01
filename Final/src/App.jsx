import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import Form from './Components/Quiz';
import Rout from './Components/Login/rout';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import WebcamPage from './Components/WebcamPage';


function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Contact/>
      <BrowserRouter>
      <Rout/>
      </BrowserRouter>
      <Form />
      <Route path="/WebcamPage" component={WebcamPage} />
    </div>
    </Router>
  );
}
export default App