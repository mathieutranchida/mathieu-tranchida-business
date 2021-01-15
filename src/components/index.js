import React from "react";
import styled from "styled-components";

import IntroBackground from "./introBackground/index";
import Bio from "./bio/Bio";
import Education from "./education/Education";

const Index = () => {
  return (
    <>
      <Wrapper>
        <IntroBackground />
        <Main>
          <Bio />
          <Education />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  margin: 0px 50px;
`;

export default Index;
