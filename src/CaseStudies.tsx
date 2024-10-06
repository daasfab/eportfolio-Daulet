import React from "react";

const CaseStudies: React.FC = () => {
  // Function to redirect to a specific URL for each case study
  const handleClickCaseStudy1 = () => {
    window.open(
      "https://github.com/daasfab/CaseStudies/tree/main/AI-Powered%20Malware%3A%20A%20New%20Generation%20of%20Threats%20",
      "_blank"
    );
  };

  const handleClickCaseStudy2 = () => {
    window.open(
      "https://github.com/daasfab/CaseStudies/tree/main/Quantum%20Computing's%20Threat%20to%20Cryptography%20",
      "_blank"
    );
  };

  const handleClickCaseStudy3 = () => {
    window.open(
      "https://github.com/daasfab/CaseStudies/tree/main/Cyber%20Espionage%20in%20Nation-State%20Conflicts%20",
      "_blank"
    );
  };

  const handleClickCaseStudy4 = () => {
    window.open(
      "https://github.com/daasfab/CaseStudies/tree/main/Advanced%20Persistent%20Threats%20Targeting%20Governments%20",
      "_blank"
    );
  };

  return (
    <section className="caseStudies-section">
      <div className="button-container2">
        <h2 className="caseStudiesText">CASE STUDIES</h2>
        <hr className="divider2" /> {/* Horizontal line */}
        {/* Case Study 1 Button */}
        <div onClick={handleClickCaseStudy1} className="casest-button">
          AI-Powered Malware: A New Generation of Threats
        </div>
        <hr className="divider2" /> {/* Horizontal line */}
        {/* Case Study 2 Button */}
        <div onClick={handleClickCaseStudy2} className="casest-button">
          Quantum Computing's Threat to Cryptography
        </div>
        <hr className="divider2" /> {/* Horizontal line */}
        {/* Case Study 3 Button */}
        <div onClick={handleClickCaseStudy3} className="casest-button">
          Cyber Espionage in Nation-State Conflicts
        </div>
        <hr className="divider2" /> {/* Horizontal line */}
        <div onClick={handleClickCaseStudy4} className="casest-button">
          Advanced Persistent Threats Targeting Governments
        </div>
        <hr className="divider2" /> {/* Horizontal line */}
      </div>
    </section>
  );
};

export default CaseStudies;
