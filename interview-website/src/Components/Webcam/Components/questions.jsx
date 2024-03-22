import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function QuestionSelector({ setQuestions, setCurrentQuestion }) {
  const [questions, setLocalQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5001/flask')
      .then(response => {
        setLocalQuestions(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  useEffect(() => {
    // Check if all questions have been answered
    const answeredQuestionsCount = userAnswers.filter(answer => answer).length;
    if (answeredQuestionsCount === questions.length) {
      setAllQuestionsAnswered(true);
    }
  }, [userAnswers, questions]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setShowAnswer(false); // Reset showAnswer state when moving to the next question
  };

  const handleAnswerSubmit = () => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = true; // Assuming the user submitted an answer
      return updatedAnswers;
    });
    setShowAnswer(true); // Display answer after user submits their response
  };

  const handleGoToFeedback = () => {
    navigate('/Feedback')
  };

  return (
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].Question}</p>
          {!userAnswers[currentQuestionIndex] && ( // Show submit button only if answer is not submitted
            <button onClick={handleAnswerSubmit}>Submit</button>
          )}
          {showAnswer && ( // Show answer only if user has submitted their response
            <p><strong>Answer:</strong> {questions[currentQuestionIndex].Answer}</p>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNextQuestion}>Next</button>
          )}
          <button onClick={handleGoToFeedback}>Go to Feedback</button>
        </div>
      ) : (
        <div>
          <h2>All questions answered</h2>
          
          
        </div>
      )}
    </div>
  );
}

export default QuestionSelector;
