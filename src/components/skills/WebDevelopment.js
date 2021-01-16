import React from "react";
import styled from "styled-components";

const WebDevelopment = () => {
  return (
    <>
      <Wrapper>
        <Header>Web Development</Header>
        <Main>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610815325/Business%20website/Skills/Web%20development/react_dxk84u.png"
              alt="react"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business website/Skills/Web development/redux_lpxxvj.png"
              alt="redux"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business website/Skills/Web development/javascript_dkri8w.png"
              alt="javascript"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/html_bioguc.png"
              alt="html"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/css_khfvv7.png"
              alt="css"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/gsap_zsfio4.png"
              alt="gsap"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/nodejs_zkiapr.png"
              alt="node.js"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/mongodb_dyuh6q.png"
              alt="mongo db"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/github_gufioz.png"
              alt="github"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610814552/Business%20website/Skills/Web%20development/git_clye7t.png"
              alt="git"
            />
          </LogoDiv>
        </Main>
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
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 25px;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100px;
  justify-content: center;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 68px;
  margin: 0px 14px 20px 14px;
`;

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  justify-self: center;
  align-self: center;
`;

export default WebDevelopment;
