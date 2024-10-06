import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPeopleCarry,
  faHandsHelping,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faVolleyball } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h2 className="aboutMeText">ABOUT ME</h2>
      <div className="whyCyberSecText-container">
        <h2 className="iLoveText">Why Cyber Security? </h2>
        <p className="whyCSTparagraph">
          I began my journey by researching notorious cyber attacks and criminal
          organizations. Disturbed by the impact cyber-attacks have on
          vulnerable individuals, I made it my goal to become a leading Cyber
          Security specialist. Additionally, I absolutely adore:
        </p>
      </div>

      <div className="icon-container">
        <div className="icon">
          <FontAwesomeIcon icon={faVolleyball} />
          <span className="icon-name">Volleyball</span>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faPeopleCarry} />
          <span className="icon-name">Mentoring</span>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faGraduationCap} />
          <span className="icon-name">Learning</span>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faHandsHelping} />
          <span className="icon-name">Volunteering</span>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faLock} />
          <span className="icon-name">Ethical Hacking</span>
        </div>
      </div>
    </section>
  );
};

export default About;
