import React from 'react';
import Webcam from "react-webcam";
import '.webcam'

export default function WebcamComponent() {
  return (
    <div className='container webcam-container'>
      <Webcam className='webcam' />
    </div>
  );
}

