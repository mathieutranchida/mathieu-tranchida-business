import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SmartphoneMenu from "../smartphoneMenu/SmartphoneMenuBlack";

gsap.registerPlugin(ScrollTrigger);

const ScrollHeader = () => {
  const header = useSelector(
    (state) =>
      state.languageReducer.content && state.languageReducer.content.header
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
          />
          <HeaderMenu>
            <Link>{header.bio}</Link>
            <Link>{header.education}</Link>
            <Link>{header.skills}</Link>
            <Link>{header.projects}</Link>
            <Link>{header.workExperience}</Link>
            <Link>{header.contact}</Link>
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
`;

const HeaderMenu = styled.div`
  display: flex;
  @media (max-width: 715px) {
    display: none;
  }
`;

const Link = styled.div`
  color: black;
  font-size: 11pt;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 14px;
`;

const SmartphoneMenuDiv = styled.div`
  @media (min-width: 716px) {
    display: none;
  }
`;

const RefScrollTrigger = styled.div`
  height: 350px;
  position: absolute;
`;

export default ScrollHeader;
