import React from "react";
import styled from "styled-components";

const Schools = () => {
  return (
    <>
      <Wrapper>
        <SchoolWrapper>
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610748222/Business website/Logo/Université_Concordia__logo_.svg__woaohu.png"
            alt="Concordia University Logo"
          />
          <Main>
            <Program>Diploma in Full-Stack Web Development</Program>
            <SchoolName>Concordia University / Concordia Bootcamps</SchoolName>
            <Date>Fall 2020</Date>
          </Main>
        </SchoolWrapper>
        <SchoolWrapper>
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610749899/Business%20website/Logo/JMSB-1030x579_u8ds9b.png"
            alt="John Molson School of Business logo"
          />
          <Main>
            <Program>
              Bachelor of Commerce - Management & International Business
            </Program>
            <SchoolName>Concordia University</SchoolName>
            <SchoolName>John Molson School of Business</SchoolName>
            <Date>Fall 2016 - Winter 2020</Date>
          </Main>
        </SchoolWrapper>
        <SchoolWrapper>
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610750373/Business website/Logo/cropped-new-logo-lfz_ywtooo.png"
            alt="Lycée Français de Zürich logo"
          />
          <Main>
            <Program>French Baccalauréat - Economic & Social Studies</Program>
            <SchoolName>Lycée Français de Zürich</SchoolName>
            <SchoolName>Honnors: "Très bien"</SchoolName>
            <Date>Fall 2013 - Summer 2016</Date>
          </Main>
        </SchoolWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 35px;
  max-width: 1030px;
  width: 100vw;
`;

const SchoolWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 30px;
`;

const SchoolLogo = styled.img`
  grid-column: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin-top: 7px;
`;

const Main = styled.div``;

const Program = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const SchoolName = styled.h4`
  font-size: 10pt;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 2px;
`;

const Date = styled.div`
  font-style: italic;
  font-weight: 300;
`;

export default Schools;
