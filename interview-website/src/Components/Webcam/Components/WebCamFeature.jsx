import React from "react";
import "./webcam.css";
import SpeechRecognitionComponent from "./speechrecognition";
import QuestionSelector from "./questions";
import WebcamComponent from "./WebcamComponent";


function WebcamFeature() {
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

export default WebcamFeature;
