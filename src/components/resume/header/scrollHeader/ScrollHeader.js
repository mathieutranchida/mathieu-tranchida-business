import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, animateScroll as scroll } from "react-scroll";

import "./scrollHeader.css";
import SmartphoneMenu from "../smartphoneMenu/SmartphoneMenuBlack";
import LanguageSelector from "../LanguageSelector";

gsap.registerPlugin(ScrollTrigger);

const ScrollHeader = () => {
  const header = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.header
  );

  let headerRef = useRef(null);
  let scrollTriggerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef, {
      duration: 0.5,
      y: "55px",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: scrollTriggerRef,
        start: "bottom top",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <>
      <Wrapper
        ref={(e) => {
          headerRef = e;
        }}
      >
        <Nav>
          <Logo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610912523/Business%20website/Logo/mtlogoblack_vmqgts.png"
            alt="Mathieu Tranchida Logo"
            onClick={() => {
              scroll.scrollToTop();
            }}
          />
          <HeaderMenu>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLinkScroll"
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
              className="navLinkScroll"
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
              className="navLinkScroll"
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
              className="navLinkScroll"
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
              className="navLinkScroll"
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
              className="navLinkScroll"
            >
              {header.contact}
            </Link>{" "}
            <LanguageSelector />
          </HeaderMenu>
          <SmartphoneMenuDiv>
            <SmartphoneMenu header={header} />
          </SmartphoneMenuDiv>
        </Nav>
      </Wrapper>
      <RefScrollTrigger
        ref={(e) => {
          scrollTriggerRef = e;
        }}
      ></RefScrollTrigger>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: -55px;
  left: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 55px;
  padding: 0px 20px;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const Logo = styled.img`
  max-height: 45px;
  max-width: 45px;
  cursor: pointer;
`;

const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const SmartphoneMenuDiv = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;

const RefScrollTrigger = styled.div`
  height: 350px;
  position: absolute;
`;

export default ScrollHeader;
