import React from 'react';
import MainWebcam from './Components/Webcam/MainWebcam';
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';


export default function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/webcam' element={<MainWebcam />}></Route>
      </Routes>
    </>


  );
}
