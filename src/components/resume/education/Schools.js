import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Schools = () => {
  const content = useSelector(
    (state) =>
      state.languageReducer.state &&
      state.languageReducer.state.education.schools
  );

  return (
    <>
      <Wrapper>
        <SchoolWrapper
          href="https://concordiabootcamps.ca/"
          rel="noopener noreferrer"
          target="_blank"
          tabIndex="0"
          aria-label="Link towards Concordia Bootcamps website / Lien vers Concordia Bootcamps site internet"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              window.open("https://concordiabootcamps.ca/");
            }
          }}
        >
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610748222/Business website/Logo/Université_Concordia__logo_.svg__woaohu.png"
            alt="Concordia University Logo"
          />
          <Main>
            <Program>{content[0].program}</Program>
            <SchoolName>{content[0].schoolName}</SchoolName>
            <Date>{content[0].date}</Date>
            <Date>Montréal, Canada</Date>
          </Main>
        </SchoolWrapper>
        <SchoolWrapper
          href="https://www.concordia.ca/jmsb.html"
          rel="noopener noreferrer"
          target="_blank"
          tabIndex="0"
          aria-label="Link towards John Molson School of Business website / Lien vers John Molson School of Business site internet"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              window.open("https://www.concordia.ca/jmsb.html");
            }
          }}
        >
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610749899/Business%20website/Logo/JMSB-1030x579_u8ds9b.png"
            alt="John Molson School of Business logo"
          />
          <Main>
            <Program>{content[1].program}</Program>
            <SchoolName>{content[1].schoolName[0]}</SchoolName>
            <SchoolName>{content[1].schoolName[1]}</SchoolName>
            <Date>{content[1].date}</Date>
            <Date>Montréal, Canada</Date>
          </Main>
        </SchoolWrapper>
        <SchoolWrapper
          href="https://lfz.ch/"
          rel="noopener noreferrer"
          target="_blank"
          tabIndex="0"
          aria-label="Link towards Lycée Français de Zurich website / Lien vers Lycée Français de Zurich site internet"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              window.open("https://lfz.ch/");
            }
          }}
        >
          <SchoolLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610750373/Business website/Logo/cropped-new-logo-lfz_ywtooo.png"
            alt="Lycée Français de Zürich logo"
          />
          <Main>
            <Program>{content[2].program}</Program>
            <SchoolName>{content[2].schoolName}</SchoolName>
            <SchoolName>{content[2].honnors}</SchoolName>
            <Date>{content[2].date}</Date>
            <Date>Zürich, Switzerland</Date>
          </Main>
        </SchoolWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 35px auto 0px auto;
  @media (max-width: 590px) {
    grid-template-columns: 1fr;
    margin: 25px auto 0px auto;
  }
`;

const SchoolWrapper = styled.a`
  display: grid;
  grid-template-columns: 125px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 30px;
  text-decoration: none;
  color: black;
  @media (max-width: 590px) {
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
`;

const SchoolLogo = styled.img`
  grid-column: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin-top: 7px;
  @media (max-width: 590px) {
    max-width: 175px;
    max-height: 55px;
    margin: 0px auto 13px auto;
  }
`;

const Main = styled.div``;

const Program = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-top: 0px;
  margin-bottom: 10px;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

const SchoolName = styled.h4`
  font-size: 10pt;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 2px;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

const Date = styled.div`
  font-style: italic;
  font-weight: 300;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

export default Schools;
