import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isWhiteSection, setIsWhiteSection] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const aboutSection = document.getElementById("about");
          const projectsSection = document.getElementById("projects");
          const caseStudiesSection = document.getElementById("case-studies");

          const aboutOffsetTop = aboutSection?.offsetTop || 0;
          const projectsOffsetTop = projectsSection?.offsetTop || 0;
          const caseStudiesOffsetTop = caseStudiesSection?.offsetTop || 0;

          if (
            (aboutSection &&
              currentScrollPosition >= aboutOffsetTop &&
              currentScrollPosition < projectsOffsetTop) ||
            (projectsSection &&
              currentScrollPosition >= projectsOffsetTop &&
              currentScrollPosition < caseStudiesOffsetTop) ||
            (caseStudiesSection &&
              currentScrollPosition >= caseStudiesOffsetTop)
          ) {
            setIsWhiteSection(true);
          } else {
            setIsWhiteSection(false);
          }

          if (currentScrollPosition > lastScrollPosition) {
            setIsVisible(false); // Scrolling down
          } else {
            setIsVisible(true); // Scrolling up
          }

          lastScrollPosition = currentScrollPosition;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`navbar ${isVisible ? "visible" : "hidden"}`}
      style={{
        backgroundColor: isWhiteSection ? "white" : "#909595",
        color: isWhiteSection ? "#909595" : "white",
      }}
    >
      <h1 className="logo">
        <FontAwesomeIcon icon={faCopyright} /> code by daulet
      </h1>
      <div className="navBar-buttons-container">
        <div onClick={() => scrollToSection("home")} className="navBar-button">
          HOME
        </div>
        <div onClick={() => scrollToSection("about")} className="navBar-button">
          ABOUT
        </div>
        <div
          onClick={() => scrollToSection("projects")}
          className="navBar-button"
        >
          PROJECTS
        </div>
        <div
          onClick={() => scrollToSection("case-studies")}
          className="navBar-button"
        >
          CASE STUDIES
        </div>
        <div
          onClick={() => scrollToSection("contact")}
          className="navBar-button"
        >
          CONTACT ME
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
