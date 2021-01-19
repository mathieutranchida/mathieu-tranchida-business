import React from "react";
import styled from "styled-components";

const Languages = ({ title }) => {
  return (
    <>
      <Wrapper>
        <Header>{title.subtitles.language}</Header>
        <Main>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610818136/Business%20website/Skills/Languages/1200px-Flag_of_France.svg_ehv8dr.png"
              alt="French - Français"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610818136/Business%20website/Skills/Languages/download_n266lb.png"
              alt="English - Anglais"
            />
          </LogoDiv>
          <LogoDiv>
            <LogoIsh
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610818136/Business%20website/Skills/Languages/1200px-Flag_of_Spain.svg_juza8n.png"
              alt="Spanish - Espagnol"
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
  margin-bottom: 8px;
  font-size: 13pt;
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

const LogoIsh = styled.img`
  max-height: 100%;
  max-width: 100%;
  justify-self: center;
  align-self: center;
  opacity: 0.3;
`;

export default Languages;
