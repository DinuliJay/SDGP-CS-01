import React from 'react';
import ReactDOM from 'react-dom';
import './webcam.css'; // Assuming your CSS file is named index.css
import SpeechRecognitionComponent from './speechrecognition';
import QuestionSelector from './questions';
import WebcamComponent from './webcam';

function App() {
  return (
    <div className="App">
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export default App 