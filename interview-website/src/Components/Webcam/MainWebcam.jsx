import React from 'react';
import './webcam.css'; // Assuming your CSS file is named index.css
import SpeechRecognitionComponent from './Components/speechrecognition';
import QuestionSelector from './Components/questions';
import WebcamComponent from './Components/webcam';

function MainWebcam() {
  return (
    <div className="app-2">
      <div className="split left">
        <div className="container">
          <SpeechRecognitionComponent />
          <QuestionSelector />
        </div>
      </div>
      <div className="split right">
        <WebcamComponent />
      </div>
    </div>
  );
}


export default MainWebcam