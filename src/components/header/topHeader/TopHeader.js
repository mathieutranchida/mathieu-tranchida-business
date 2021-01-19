import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import LanguageSelector from "../LanguageSelector";

import "./topHeader.css";
import SmartphoneMenu from "../smartphoneMenu/SmartphoneMenuWhite";

const TopHeader = () => {
  const header = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.header
  );

  return (
    <>
      <Wrapper>
        <Nav>
          <Logo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610912523/Business%20website/Logo/mtlogowhite_ics8rx.png"
            alt="Mathieu Tranchida Logo"
          />
          <HeaderMenu>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.bio}
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.education}
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.skills}
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.projects}
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.workExperience}
            </Link>
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkTop"
            >
              {header.contact}
            </Link>
            <Filter>
              <LanguageSelector />
            </Filter>
          </HeaderMenu>
          <SmartphoneMenuDiv>
            <SmartphoneMenu header={header} />
          </SmartphoneMenuDiv>
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
  margin: 20px 28px 0px 20px;
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

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: -5px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SmartphoneMenuDiv = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;

const Filter = styled.div`
  -webkit-filter: drop-shadow(0px 0px 15px black);
  filter: drop-shadow(0px 0px 15px black);
`;

export default TopHeader;
