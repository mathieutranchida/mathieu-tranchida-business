import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Schools from "./Schools";

const Education = () => {
  const header = useSelector(
    (state) =>
      state.languageReducer.content &&
      state.languageReducer.content.education.title
  );

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{header}</Header>
          <Schools />
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
  max-width: 1250px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

export default Education;
