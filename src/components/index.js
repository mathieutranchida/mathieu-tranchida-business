import React, { useRef } from "react";
import styled from "styled-components";

import TopHeader from "./header/topHeader/TopHeader";
import ScrollHeader from "./header/scrollHeader/ScrollHeader";
import IntroBackground from "./introBackground/index";
import Bio from "./bio/Bio";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import WorkExperience from "./workExperience/WorkExperience";
import Contact from "./contact/Contact";

const Index = () => {
  return (
    <>
      <Wrapper>
        <TopHeader />
        <ScrollHeader />
        <IntroBackground />
        <Main>
          <Bio />
          <Education />
          <Skills />
          <Projects />
          <WorkExperience />
          <Contact />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  margin: 0px 50px;
  @media (max-width: 370px) {
    margin: 0px 8vw;
  }
`;

export default Index;
