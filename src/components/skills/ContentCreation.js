import React from "react";
import styled from "styled-components";

const ContentCreation = ({ title }) => {
  return (
    <>
      <Wrapper>
        <Header>{title.subtitles.contentCreation}</Header>
        <Main>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816652/Business%20website/Skills/content%20creation/photoshop_qsptty.png"
              alt="Adobe Photoshop"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816653/Business%20website/Skills/content%20creation/illustrator_c7d00p.png"
              alt="Adobe Illustrator"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816652/Business%20website/Skills/content%20creation/indesign_fdczq4.png"
              alt="Adobe InDesign"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816652/Business%20website/Skills/content%20creation/xd_hbmi5o.png"
              alt="Adobe XD"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816652/Business%20website/Skills/content%20creation/premierepro_jhlvvx.png"
              alt="Adobe Premiere Pro"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816652/Business%20website/Skills/content%20creation/lightroom_c1hsay.png"
              alt="Adobe Lightroom Classic"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610816653/Business%20website/Skills/content%20creation/finalcut_hswdw3.png"
              alt="Final Cut Pro"
            />
          </LogoDiv>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 30px 0px 10px 0px;
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

export default ContentCreation;
