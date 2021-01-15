import React from "react";
import styled from "styled-components";

const WebDevelopment = () => {
  return (
    <>
      <Wrapper>
        <Header>Web Development</Header>
        <Main>
          <SkillDiv>
            <Category>Frontend</Category>
            <List>
              <ListItem>React.js</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>GSAP</ListItem>
            </List>
          </SkillDiv>
          <SkillDiv>
            <Category>Backend</Category>
            <List>
              <ListItem>Node.js</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>MongoDB</ListItem>
            </List>
          </SkillDiv>
          <SkillDiv>
            <Category>Other</Category>
            <List>
              <ListItem>GitHub</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>VS Code</ListItem>
            </List>
          </SkillDiv>
          <SkillDiv>
            <Category>Learning</Category>
            <List>
              <ListItem>Firebase</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>React Native</ListItem>
            </List>
          </SkillDiv>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  max-width: 980px;
  margin-bottom: 10px;
`;

const Header = styled.h2`
  margin-top: 0px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 200px;
  justify-content: space-between;
`;

const SkillDiv = styled.div`
  width: 100px;
  margin-bottom: 25px;
`;

const Category = styled.div`
  font-weight: 700;
  font-size: 12pt;
  text-transform: uppercase;
  padding-bottom: 8px;
`;

const List = styled.div``;

const ListItem = styled.div``;

export default WebDevelopment;
