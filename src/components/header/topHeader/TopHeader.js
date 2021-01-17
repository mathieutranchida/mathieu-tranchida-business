import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const header = useSelector(
    (state) =>
      state.languageReducer.content && state.languageReducer.content.header
  );

  return (
    <>
      <Wrapper>
        <Nav>
          <Logo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610912523/Business%20website/Logo/mtlogowhite_ics8rx.png"
            alt="Mathieu Tranchida Logo"
          />
          <Div>
            <Link>{header.bio}</Link>
            <Link>{header.education}</Link>
            <Link>{header.skills}</Link>
            <Link>{header.projects}</Link>
            <Link>{header.workExperience}</Link>
            <Link>{header.contact}</Link>
          </Div>
        </Nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin: 20px 35px 0px 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const Logo = styled.img`
  max-height: 70px;
  max-width: 70px;
  -webkit-filter: drop-shadow(0px 0px 15px black);
  filter: drop-shadow(0px 0px 15px black);
`;

const Div = styled.div`
  display: flex;
`;

const Link = styled.div`
  color: white;
  font-size: 11pt;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 14px;
  text-shadow: 0px 0px 15px black;
`;

export default TopHeader;
