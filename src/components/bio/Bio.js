import React from "react";
import styled from "styled-components";

const Bio = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <P>
            Hello! My name is Mathieu Tranchida, I'm 23 years old and I'm a web
            developer.
          </P>
          <P>
            Originally from France and Switzerland, I moved to Canada to
            complete my university studies and I am now looking for a full-time
            opportunity.
            <br />
            My business, artistic and technical skills make me a unique and
            versatile prospect for your projects.
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
