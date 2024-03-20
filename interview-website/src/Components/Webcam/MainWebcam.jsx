import React from "react";
import "./Components/webcam.css";
import SpeechRecognitionComponent from "./Components/speechrecognition";
import QuestionSelector from "./Components/questions";
import WebcamComponent from "./Components/WebcamComponent";

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

export default MainWebcam;
