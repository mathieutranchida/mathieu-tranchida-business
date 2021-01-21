import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bio = () => {
  const content = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.bio
  );

  return (
    <>
      <Wrapper>
        <Main>
          <P>
            {content.intro[0]} (
            <Link to="/portfolio-photo" style={{ color: "black" }}>
              {content.intro[1]}
            </Link>{" "}
            {content.intro[2]}{" "}
            <Link to="/portfolio-design" style={{ color: "black" }}>
              {content.intro[3]}
            </Link>
            ).
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
  max-width: 980px;
`;

const P = styled.p`
  text-align: justify;
  font-weight: 600;
  font-size: 10.5pt;
  margin-bottom: 25px;
`;

export default Bio;
