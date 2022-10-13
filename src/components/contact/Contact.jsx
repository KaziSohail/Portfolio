import "./contact.scss"
import React from 'react';
import { useState } from "react";
import { SpaRounded } from "@material-ui/icons";
export default function Contact() {
  const [Message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="Submit">Send</button>
          {Message && <span>Thanks, I'll reply ASAP 😊 </span> }
        </form>
      </div>
    </div>
  )
}
