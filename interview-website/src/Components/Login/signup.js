import React, {useState} from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import firebase from './firebaseConfig'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const submit = async(e) =>
  {
    e.preventDefault()
    try
    { 
      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
      if (user)
      (
        alert("Account Created Successfully")
      )
    }
    catch(error)
    { 
      alert(error)
    }
  
  }
  return (
    <>
    <h1>Sign Up</h1>
    <div className='main_container_signup'>
      <div className='header'>
        <h2>signup</h2>
      </div>
      <div className='box'>
        <input type='text' value={name} placeholder='UserName' onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className='box'>
        <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className='box'>
        <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
      </div>
      <p>Already have an Account <Link to="/login">Login Now</Link></p>
      <button onClick={submit}>SignUp</button>
    </div>
    </>
  )
}

export default SignUp
