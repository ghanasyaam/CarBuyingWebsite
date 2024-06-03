import React from 'react';
import './getInTouchStyles.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <h2>Get In Touch</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default GetInTouch;
