import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <div className='b-container'>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Type your email' required/>
            <textarea placeholder='Write Here......' name='message'></textarea>
            <input type='submit' value='Send'/>
        </form>
        </div>

    </div>
  );
}

export default Contact;
