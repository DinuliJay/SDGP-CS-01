// import React, {useState} from "react";
// import './Quiz.css';
// import Quiz from './Quiz';

// const Feedback = () => {
//     <div>
//         <h2>Feedback</h2>
//         {/* {submittedData && (
//         <div className='container'>
//         <div className='header'></div>
//         <div>
//             <h2>Submitted Details</h2>
//             <p>Full Name: {submittedData.answers[0]}</p>
//             <p>Academic Background: {submittedData.answers[1]}</p>
//             <p>Soft Skills: {submittedData.answers[2]}</p>
//             <p>Academic Achievements: {submittedData.answers[3]}</p>
//             <p>Preferred Job Role: {submittedData.selectedOption}</p>
//         </div>
//         </div>
//     )} */}
//     </div>
// };

// export default Feedback;

import React from "react";
import { useState, useEffect } from 'react';



const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    // Fetch feedback data from the Flask backend
    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/feedback');
                if (!response.ok) {
                    throw new Error(`Failed to fetch feedback: ${response.statusText}`);
                }
                const data = await response.json();
                setFeedbackData(data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        fetchFeedback(); // Call the fetchFeedback function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h2>Feedback</h2>
            <div>
                {feedbackData.map((feedback, index) => (
                    <div key={index}>
                        <h3>Emotion: {feedback.emotion}</h3>
                        <p>Feedback: {feedback.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Feedback2 = ({ submittedData }) => {
    return (
    <div>
        <h2>Feedback</h2>
        {submittedData && (
        <div>
            <h3>Submitted Details</h3>
            <p>Full Name: {submittedData.answers[0]}</p>
            <p>Academic Background: {submittedData.answers[1]}</p>
            <p>Soft Skills: {submittedData.answers[2]}</p>
            <p>Academic Achievements: {submittedData.answers[3]}</p>
            <p>Preferred Job Role: {submittedData.selectedOption}</p>
        </div>
        )}
    </div>
    );
};

export default Feedback;