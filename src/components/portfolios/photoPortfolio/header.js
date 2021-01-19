import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Header = () => {
  const header = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.photoPortfolio
  );

  const arrowStyle = {
    height: "30px",
    width: "30px",
    paddingTop: "1px",
  };

  return (
    <>
      <Wrapper>
        <Main>
          <Link to="/">
            <RiArrowLeftSLine style={arrowStyle} />
            {header.backToMain}
          </Link>
          <Link to="/portfolio-design">
            {header.designPortfolio}
            <RiArrowRightSLine style={arrowStyle} />
          </Link>
        </Main>
        <Title>{header.title}</Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: calc(100vw - 10px);
  background-color: white;
  padding: 15px 5px 12px 5px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16pt;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 5vw;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 17pt;
  position: absolute;
  left: 50%;
  top: 16px;
  transform: translate(-50%);
  margin: 0px;
  @media (max-width: 1000px) {
    top: 0%;
    position: relative;
    text-align: center;
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    font-size: 5vw;
  }
`;

export default Header;
