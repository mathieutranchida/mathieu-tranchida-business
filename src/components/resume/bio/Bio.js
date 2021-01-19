import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Bio = () => {
  const content = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.bio
  );

  return (
    <>
      <Wrapper>
        <Main>
          <P>{content.mainText}</P>
          <P>
            {content.secondaryText}
            <br />
            {content.secondaryTextReturn}
          </P>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: calc(5vh + 25px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1250px;
`;

const P = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 10.5pt;
  margin-bottom: 25px;
`;

export default Bio;
