import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const questions = [
  "Enter your full name. ",
  "Mention your Academic Background.",
  "Mention your soft skills.",
  "Mention your Academic Achievements.",
];
const options = [
  "Software Engineer",
  "Front-end Developer",
  "Full-stack Developer",
  "Back-end Developer",
  "UI/UX Designer",
];

const Form = () => {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

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
    event.preventDefault();

    const pageMap = {
      SoftwareEngineer: "/",
      FrontEndDeveloper: "/",
    };

    setSubmittedData({ answers, selectedOption });

    // Navigate to the webcam route
    navigate("/webcam");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="quiz">
          <div className="f_container">
            <h2>Quiz</h2>
            <div className="header">
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
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="submit" value="Submit">
                <Link to="/feedback">
                  <a>Submit</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Form;
