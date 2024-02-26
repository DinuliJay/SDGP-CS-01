import { useState } from 'react'
import './App.css'
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    question1:"",
    question2:"",
    question3:"",
    question4:"",
    question5:"",
  });

  const inputs = [
    {
      id: 1,
      name: "question1",
      type: "text",
      placeholder: "Enter your full name.",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "question2",
      type: "text",
      placeholder: "Mention your Academic Background.",
      errorMessage: "",
      label: "Education",
      required: true,
    },
    
    {
      id: 3,
      name: "question3",
      type: "dropdown",
      placeholder: "",
      label: "Job Role",
    },
    {
      id: 4,
      name: "question4",
      type: "text",
      placeholder: "Mention the technologies that you expertise in.",
      errorMessage: "",
      label: "Technologies",
      required: true,
    },
    {
      id: 5,
      name: "question5",
      type: "text",
      placeholder: "Mention your soft skills.",
      errorMessage:"",
      label: "Skills",
      required: true,
    },
    {
      id: 6,
      name: "question6",
      type: "text",
      placeholder: "Mention your Academic Achievements.",
      errorMessage: "",
      label: "Achievements",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Quiz</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
  
  
  
}

export default App
