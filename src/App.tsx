// src/App.tsx
import React from "react";
import Home from "./Home"; // Ensure Home component exists and is imported
import About from "./About"; // Import About component
import Projects from "./Projects"; // Import Projects component
import CaseStudies from "./CaseStudies"; // Import CaseStudies component
import Contact from "./Contact"; // Import Contact component
import NavBar from "./navBar"; // Adjust path accordingly

import "./App.css"; // Import the CSS

const App: React.FC = () => {
  return (
    <div>
      <NavBar />

      {/* Each section with an ID for smooth scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
