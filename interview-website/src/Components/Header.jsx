import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
      navigate('/form')
  }

  return (
    <div id="main">
      <div className="pr-heading">
        <h2>ACE YOUR</h2>
        <h1>
          <span>INTERVIEW</span> WITH ACE
        </h1>
        <p className="details">
          Unlock your potential and master the art of interviewing with Ace
        </p>
        <div className="header-btns">
          <a>
            {" "}
            <Link
              to="quiz"
              smooth={true}
              duration={1000}
              onClick={handleStartQuiz}
              className="header-btn"
            >
              {" "}
              Start Quiz
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
