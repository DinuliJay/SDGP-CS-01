
import React from 'react'
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Signup from './Components/Login/signup'
import Login from './Components/Login/login'

const HomePage = () => {
  return (
    <div className='App'>  
      <Navbar/>
      <Header/>
      <Feature/>
      <Contact/>
    </div>
  )
}

export default HomePage


