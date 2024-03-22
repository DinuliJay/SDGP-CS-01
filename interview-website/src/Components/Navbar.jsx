import React, {useState} from 'react';
import ace from '../images/ace.png';
import logo from '../images/logo.png'
// import {Link} from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import {useNavigate} from "react-router-dom";


function Navbar() {
    const [nav,setNav] = useState(false);
    const navigate = useNavigate();

    const handleSignUpClick = () =>{
        navigate('/signup')
    }

    const handleLoginClick = () =>[
        navigate('/login')
    ]

    const handleLogoClick = () =>{
        navigate('/')
    }

    const toggleMenu = () => {
        setNav(!nav); // Toggle the state of nav
    }

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={1000}>
                <img src={logo} alt='Logo' onClick={handleLogoClick}/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' onClick={toggleMenu}/>
            <label className='menu-icon' from='menu-btn' onClick={toggleMenu}>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
                <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
                <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
                <li className='sign-up-btn'><Link onClick={handleSignUpClick}> Login / SignUp</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;
