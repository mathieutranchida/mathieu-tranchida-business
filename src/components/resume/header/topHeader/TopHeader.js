import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, scroller } from "react-scroll";
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
              tabIndex="0"
              aria-label={header.bio}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section1", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
              tabIndex="0"
              aria-label={header.education}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section2", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
              tabIndex="0"
              aria-label={header.skills}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section3", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
              tabIndex="0"
              aria-label={header.projects}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section4", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
              tabIndex="0"
              aria-label={header.workExperience}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section5", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
              tabIndex="0"
              aria-label={header.contact}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("section6", {
                    activeClass: "active",
                    spy: true,
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                }
              }}
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
