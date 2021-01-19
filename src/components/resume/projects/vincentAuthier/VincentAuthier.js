import React from "react";
import styled from "styled-components";

import ModalDemo from "./ModalDemo";

import { FiChevronRight } from "react-icons/fi";

const VincentAuthier = ({ project }) => {
  return (
    <>
      <Wrapper>
        <Header>{project.title}</Header>
        <Info>
          <InfoStrong>{project.techUsedTitle}</InfoStrong>
          {project.techUsedContent}
        </Info>
        <Info>
          <InfoStrong>{project.timeFrameTitle}</InfoStrong>
          {project.timeFrameContent}
        </Info>
        <LinkWrapper>
          <Link
            href="https://github.com/mathieutranchida/vincent-authier-website"
            target="_blank"
          >
            {project.seeGitHub + " "}
            <FiChevronRight
              style={{
                marginLeft: "3px",
                height: "14px",
                width: " 14px",
                paddingTop: "1px",
              }}
            />
          </Link>
          <ModalDemo title={project.title} />
        </LinkWrapper>
        <DescriptionTitle>{project.descriptionTitle}</DescriptionTitle>
        <Description>{project.description[0]}</Description>
        <Description>{project.description[1]}</Description>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 30px 0px 10px 0px;
`;

const Header = styled.h2`
  margin-top: 0px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-bottom: 10px;
  @media (max-width: 590px) {
    text-align: center;
  }
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
