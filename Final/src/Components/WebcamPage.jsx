import React from 'react';
import './webcam.css'; // Assuming your CSS file is named webcam.css
import SpeechRecognitionComponent from './speechrecognition';
import WebcamComponent from './webcam';
import QuestionSelector from './questions';

function WebcamPage() {
    return (
      <div>
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
  

export default WebcamPage;
