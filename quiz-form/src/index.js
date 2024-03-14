import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Quiz.js';
import Feedback from './Feedback.js';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Quiz from './Quiz';
// import Feedback from './Feedback';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Quiz} />
//         <Route exact path="/feedback" component={Feedback} />
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );