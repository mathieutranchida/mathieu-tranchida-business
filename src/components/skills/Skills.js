import React from "react";
import styled from "styled-components";

import Schools from "./Schools";

const Bio = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Header>Education</Header>
          <Schools />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1250px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

export default Bio;
