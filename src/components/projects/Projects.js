import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CbFinalProject from "./cbFinalProject/CbFinalProject";
import VincentAuthier from "./vincentAuthier/VincentAuthier";
import CbProjects from "./cbProjects/CbProjects";

const Projects = () => {
  const projects = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.projects
  );

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{projects.title}</Header>
          <CbFinalProject project={projects.projects[0]} />
          <VincentAuthier project={projects.projects[1]} />
          <CbProjects project={projects.projects[2]} />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 980px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export default Projects;
