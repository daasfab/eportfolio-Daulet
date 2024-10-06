import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactMe: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="textContainer">
        <div className="Text">
          <h2 className="ContactMeTEXT">Get in touch with me!</h2>
          <h2 className="lmmhTEXT">Let's Make Magic Happen</h2>
        </div>

        <div className="contact-left">
          <a
            href="https://www.linkedin.com/in/dauletr/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:daulet.ras@gmail.com" className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://github.com/daasfab"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        {/* 
        <img
          src="C:\Users\daule\Desktop\Personal\scribble.png"
          alt="Contact PNG"
          className="contact-png"
        />
        {/* Change "your-image.png" to the actual path of your image */}
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
