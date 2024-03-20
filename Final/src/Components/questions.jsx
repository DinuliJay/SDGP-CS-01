import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionSelector({ setQuestions, setCurrentQuestion }) {
  const [questions, setLocalQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/flask')
      .then(response => {
        setLocalQuestions(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setCurrentQuestion(currentQuestionIndex);
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].Question}</p>
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionSelector;
