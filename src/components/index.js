import React from "react";
import styled from "styled-components";

import IntroBackground from "./introBackground/index";
import Bio from "./bio/Bio";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import WorkExperience from "./workExperience/WorkExperience";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Index = () => {
  return (
    <>
      <Wrapper>
        <IntroBackground />
        <Main>
          <Bio />
          <Education />
          <Skills />
          <Projects />
          <WorkExperience />
          <Contact />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  margin: 0px 50px;
`;

export default Index;
