import React from "react";

const Projects: React.FC = () => {
  // Function to redirect to a specific URL
  const handleClickProject1 = () => {
    window.open("https://github.com/daasfab/CryptographyAlgorithms", "_blank");
  };

  const handleClickProject2 = () => {
    window.open(
      "https://github.com/daasfab/NeuroAudit-CyberSecurityAuditor",
      "_blank"
    );
  };

  const handleClickProject3 = () => {
    window.open("https://github.com/daasfab/DeepTrace-PacketSniffer", "_blank");
  };

  return (
    <section className="projects-section">
      <div className="button-container">
        <h2 className="recentWorkText">RECENT PROJECTS</h2>
        <hr className="divider" /> {/* Horizontal line */}
        {/* Project 1 Button */}
        <div onClick={handleClickProject1} className="project-button">
          Cryptography Algorithms
        </div>
        <hr className="divider" /> {/* Horizontal line */}
        {/* Project 2 Button */}
        <div onClick={handleClickProject2} className="project-button">
          NeuroAudit
        </div>
        <hr className="divider" /> {/* Horizontal line */}
        {/* Project 3 Button */}
        <div onClick={handleClickProject3} className="project-button">
          DeepTrace
        </div>
        <hr className="divider" /> {/* Horizontal line */}
      </div>
    </section>
  );
};

export default Projects;
