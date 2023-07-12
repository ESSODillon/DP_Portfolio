import React from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <AboutSection />

      <SkillsSection />

      <ProjectsSection />
    </React.Fragment>
  );
}

export default Home;
