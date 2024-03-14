import React, { useState } from "react";
import './Quiz.css';

const questions = [
  "Enter your full name. ",
  "Mention your Academic Background.",
  "Mention your soft skills.",
  "Mention your Academic Achievements.",
];
const options = ["Software Engineer", "Front-end Developer", "Full-stack Developer", "Fullstack Developer", "UI/UX Designer"];

const Form = () => {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Answers:", answers);
    console.log("Selected option:", selectedOption);
  
    const pageMap = {
      SoftwareEngineer: "/",
      FrontEndDeveloper: "/",
    };

    setSubmittedData({ answers, selectedOption });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='container'>
        <h2>Quiz</h2>
        <div className='header'>

        {questions.map((question, index) => (
          <div key={index}>
            <label htmlFor={`question-${index}`}>{question}</label>
            <input
              id={`question-${index}`}
              type="text"
              value={answers[index]}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
        ))}
        <label htmlFor="dropdown">Select a preferred job role:</label>
        <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* <button type="submit">Submit</button> */}
        <input type='submit' value='Submit'/>

        </div>
        </div>
      </form>
      {submittedData && (
        <div className='container'>
        <div className='header'></div>
        <div>
          <h2>Submitted Details</h2>
          <p>Full Name: {submittedData.answers[0]}</p>
          <p>Academic Background: {submittedData.answers[1]}</p>
          <p>Soft Skills: {submittedData.answers[2]}</p>
          <p>Academic Achievements: {submittedData.answers[3]}</p>
          <p>Preferred Job Role: {submittedData.selectedOption}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Form;

