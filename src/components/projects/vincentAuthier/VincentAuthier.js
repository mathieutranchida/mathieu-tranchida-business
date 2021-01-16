import React from "react";
import styled from "styled-components";

import ModalDemo from "./ModalDemo";

import { FiChevronRight } from "react-icons/fi";

const title = "Vincent Authier Website";

const VincentAuthier = () => {
  return (
    <>
      <Wrapper>
        <Header>{title}</Header>
        <Info>
          <InfoStrong>Technologies used:</InfoStrong> React, Javascript, HTML,
          CSS, Email.js, GSAP, ScrollTriggers
        </Info>
        <Info>
          <InfoStrong>Time frame:</InfoStrong> 7 days
        </Info>
        <LinkWrapper>
          <Link
            href="https://github.com/mathieutranchida/vincent-authier-website"
            target="_blank"
          >
            See GitHub repository{" "}
            <FiChevronRight
              style={{
                marginLeft: "3px",
                height: "14px",
                width: " 14px",
                paddingTop: "1px",
              }}
            />
          </Link>
          <ModalDemo title={title} />
        </LinkWrapper>
        <DescriptionTitle>Description:</DescriptionTitle>
        <Description>
          Created a landing page intended to present Vincent Authier as an
          athlete and put him in relation with potential sponsors and clients.
        </Description>
        <Description>
          This app is exclusively front-end and heavily based on GSAP and
          ScrollTriggers animations. The text reveals itself as you scroll down
          on the website. The website's sides are made of continuous text moving
          up and down as the user scrolls (animated using GSAP). The gallery is
          made with a CSS grid and is fully responsive to the smartphone size.
        </Description>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100vw;
  max-width: 980px;
  margin-bottom: 10px;
`;

const Header = styled.h2`
  margin-top: 0px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Info = styled.div`
  margin-bottom: 2px;
`;

const InfoStrong = styled.span`
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  margin: 10px 0px 13px;
`;

const Link = styled.a`
  font-style: italic;
  margin-top: 2px;
  display: flex;
  align-items: center;
  width: 170px;
  cursor: pointer;
  font-weight: 600;
  transition: 300ms ease-in-out;
  color: black;
  text-decoration: none;
  &:hover {
    margin-left: 5px;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      margin-left: 0px;
    }
  }
`;

const DescriptionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 11pt;
`;

const Description = styled.div`
  text-align: justify;
  margin-bottom: 5px;
  text-indent: 35px;
`;

export default VincentAuthier;
