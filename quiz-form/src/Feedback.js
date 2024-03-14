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

const Feedback = ({ submittedData }) => {
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