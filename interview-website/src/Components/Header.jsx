import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
  return (
    <div id='main'>
        <div className='pr-heading'>
            <h2>ACE YOUR</h2>
            <h1><span>INTERVIEW</span> WITH ACE</h1>
            <p className='details'>Unlock your potential and master the art of interviewing with Ace</p>
            <div className='header-btns'>
                <a> <Link to='quiz' smooth={true} duration={1000}onClick={() => scroll.scrollTo('#quiz') } className='header-btn'> Start Quiz</Link></a>

            </div>
        </div>
    </div>
  )
}

export default Header;

