import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

import CbFinalProject from "./cbFinalProject/CbFinalProject";
import VincentAuthier from "./vincentAuthier/VincentAuthier";
import CbProjects from "./cbProjects/CbProjects";

const Projects = () => {
  const projects = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.projects
  );

  const arrowStyle = {
    height: "19px",
    width: "19px",
  };

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{projects.title}</Header>
          <CbFinalProject project={projects.projects[0]} />
          <VincentAuthier project={projects.projects[1]} />
          <CbProjects project={projects.projects[2]} />
          <Div>
            <LinkOne to="/portfolio-photo">
              {projects.projects[3].title}{" "}
              <RiArrowRightSLine style={arrowStyle} />
            </LinkOne>
            <LinkTwo to="/portfolio-design">
              {projects.projects[4].title}
              <RiArrowRightSLine style={arrowStyle} />
            </LinkTwo>
          </Div>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 980px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkOne = styled(NavLink)`
  margin-top: 20px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-bottom: 0px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

const LinkTwo = styled(NavLink)`
  margin-top: 5px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-bottom: 30px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

export default Projects;
