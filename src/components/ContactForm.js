import React from "react";
import '../components/ContactForm.css';
import '../Portfolio/index.css';

function ContactForm() {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
            <label>Subject</label>
            <input type="text"/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
             <button className="btns">Submit</button>
        </form>

    </div>
  )
}

export default ContactForm