import React from "react";
import styled from "styled-components";

const Arcteryx = ({ job }) => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper>
          <CompanyLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610832013/Business%20website/Work/arcteryx_nzovbc.png"
            alt="Arc'teryx"
          />
          <Main>
            <Company>{job.company}</Company>
            <JobTitle>{job.jobs[0].jobTitle}</JobTitle>
            <Description>{job.jobs[0].description[0]}</Description>
            <Description>{job.jobs[0].description[1]}</Description>
            <JobTitleSecond>{job.jobs[1].jobTitle}</JobTitleSecond>
            <Description>{job.jobs[1].description[0]}</Description>
            <Description>{job.jobs[1].description[1]}</Description>
            <Description>{job.jobs[1].description[3]} </Description>
            <Description>{job.jobs[1].description[2]}</Description>
          </Main>
        </CompanyWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 35px;
`;

const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: 105px 1fr;
  grid-column-gap: 25px;
  margin-bottom: 30px;
`;

const CompanyLogo = styled.img`
  grid-column: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin-top: 7px;
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

const JobTitleSecond = styled.h4`
  font-size: 10pt;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 2px;
`;

const Description = styled.div``;

export default Arcteryx;
