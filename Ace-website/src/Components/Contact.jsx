import React from 'react';
import {useRef} from "react";
import emailjs from'@emailjs/browser';

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
      
      emailjs
        .sendForm('service_l2npeqd', 'template_zfjwlvr', form.current, 'uDhmLFUZZEMr7BBG8')
        .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("Message sent")
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
  };
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form ref={form} onSubmit={(sendEmail)}>
            
            <input type='text' placeholder='Full Name' name="to_name" required/>
            
            <input type='email' placeholder='Type your email' name="from_name" required/>
            
            <textarea placeholder='Write Here......' name='message'></textarea>
            <input type='submit' value='Send'/>
        </form>

    </div>
  );
}

export default Contact;
