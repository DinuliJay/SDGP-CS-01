import React from 'react';
import Webcam from "react-webcam";
import './webcam.css'

export default function WebcamComponent() {
  return (
    <div className='container webcam-container'>
      <Webcam className='webcam' />
    </div>
  );
}

