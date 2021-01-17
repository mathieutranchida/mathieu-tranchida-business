import React from "react";
import styled from "styled-components";

const Cssc = ({ job }) => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper>
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
            <Description>{job.description[3]} </Description>
            <Description>{job.description[4]} </Description>
            <Description>{job.description[5]} </Description>
            <Description>{job.description[6]} </Description>
          </Main>
        </CompanyWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 35px;
  @media (max-width: 590px) {
    display: flex;
    justify-content: center;
  }
`;

const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: 105px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 15px;
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
`;

const JobTitle = styled.h4`
  font-size: 10pt;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 2px;
`;

const Description = styled.div`
  text-align: justify;
`;

export default Cssc;
