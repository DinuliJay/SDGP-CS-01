import React from 'react';
import MainWebcam from './Components/Webcam/MainWebcam';
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import Form from './Components/Form';
import SignUp from './Components/Login/signup';
import Login from './Components/Login/login';


export default function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/webcam' element={<MainWebcam />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>


  );
}
