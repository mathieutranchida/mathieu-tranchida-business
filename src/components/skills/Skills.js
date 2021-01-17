import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import WebDevelopment from "./WebDevelopment";
import ContentCreation from "./ContentCreation";
import Languages from "./Languages";

const Skills = () => {
  const title = useSelector(
    (state) =>
      state.languageReducer.content && state.languageReducer.content.skills
  );

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{title.title}</Header>
          <WebDevelopment title={title} />
          <ContentCreation title={title} />
          <Languages title={title} />
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

export default Skills;
