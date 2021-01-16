import React from "react";
import styled from "styled-components";

import { FiChevronRight } from "react-icons/fi";

const title = "Concordia Bootcamps' Projects";

const CbProjects = () => {
  return (
    <>
      <Wrapper>
        <Header>{title}</Header>
        <Info>
          <InfoStrong>Technologies used:</InfoStrong> React, Redux, JavaScript,
          CSS, HTML, Node.js, MongoDB, GitHub, & more
        </Info>
        <LinkWrapper>
          <Link href="https://github.com/mathieutranchida" target="_blank">
            See my GitHub for more information{" "}
            <FiChevronRight
              style={{
                marginLeft: "3px",
                height: "14px",
                width: " 14px",
                paddingTop: "1px",
              }}
            />
          </Link>
        </LinkWrapper>
        <DescriptionTitle>Description:</DescriptionTitle>
        <Description>
          While completing my diploma at Concordia Bootcamps, I worked on
          multiple solo projects, as well as one team project. Those projects
          include a Twitter clone (Frontend | Solo), a Flight booking app
          (Frontend & Backend | Solo), a Javascript game (Frontend | Solo) and
          an e-commerce web app (Frontend & Backend | Team of 3).
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
  width: 270px;
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

export default CbProjects;
