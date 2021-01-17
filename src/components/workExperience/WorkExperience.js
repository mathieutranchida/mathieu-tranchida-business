import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import FreelancePhotography from "./freelancePhotography/Freelance";
import Arcteryx from "./arcteryx/Arcteryx";
import Cssc from "./cssc/Cssc";

const WorkExperience = () => {
  const work = useSelector(
    (state) =>
      state.languageReducer.content &&
      state.languageReducer.content.workExperience
  );

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{work.title}</Header>
          <FreelancePhotography job={work.jobs[0]} />
          <Arcteryx job={work.jobs[1]} />
          <Cssc job={work.jobs[2]} />
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

const Main = styled.div``;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export default WorkExperience;
