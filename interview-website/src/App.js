import React from 'react';
import Form from './Components/Quiz';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import MainWebcam from './Components/Webcam/MainWebcam';
import {Routes,Route} from 'react-router-dom'
import Signup from './Components/Login/signup'
import Login from './Components/Login/login'


export default function App() {
  return (

    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Contact/>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/webcam' element={<MainWebcam/>}></Route>
      </Routes>
      <Form />
      {/* <MainWebcam /> */}
      
    </div>
  );
}
