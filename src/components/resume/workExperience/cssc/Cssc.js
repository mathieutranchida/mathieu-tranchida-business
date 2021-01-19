import React from "react";
import styled from "styled-components";

const Cssc = ({ job }) => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper
          href="https://www.concordiass.club/"
          aria-label="Link towards ski club website - lien vers site ski club"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CompanyLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610832013/Business%20website/Work/CSSC-Square-White_bgrsgs.png"
            alt="Freelance photography at Mathieu Tranchida"
          />
          <Main>
            <Company>{job.company}</Company>
            <JobTitle>{job.jobTitle}</JobTitle>
            <Description>{job.description[0]}</Description>
            <Description>{job.description[1]}</Description>
            <Description>{job.description[2]}</Description>
          </Main>
        </CompanyWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const CompanyWrapper = styled.a`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 0px;
  max-width: 980px;
  text-decoration: none;
  color: black;
  @media (max-width: 590px) {
    grid-template-columns: 1fr;
    margin-bottom: 0px;
  }
`;

const CompanyLogo = styled.img`
  grid-column: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin-top: 7px;
  @media (max-width: 590px) {
    display: none;
  }
`;

const Main = styled.div``;

const Company = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 13pt;
  margin-top: 0px;
  margin-bottom: 10px;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

const JobTitle = styled.h4`
  font-size: 10pt;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 2px;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

const Description = styled.div`
  text-align: justify;
  margin-bottom: 3px;
  text-indent: 25px;
`;

export default Cssc;
