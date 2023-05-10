import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;
