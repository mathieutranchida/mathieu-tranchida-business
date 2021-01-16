import React from "react";
import styled from "styled-components";

import CbFinalProject from "./cbFinalProject/CbFinalProject";

const Projects = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Header>Projects</Header>
          <CbFinalProject />
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
  max-width: 1030px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export default Projects;
