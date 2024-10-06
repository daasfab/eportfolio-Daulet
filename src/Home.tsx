import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <h2 className="nameMovingText">Daulet Rashidov</h2>
      <div className="jobTitle">
        <p>
          Cyber Security{" "}
          <FontAwesomeIcon icon={faShieldHalved} className="shieldIcon" />
        </p>
        <p>Analyst & Engineer</p>
      </div>

      <div className="locationText">
        <p>Located</p>
        <p>in the</p>
        <p>United Kingdom</p>
      </div>
    </section>
  );
};

export default Home;
