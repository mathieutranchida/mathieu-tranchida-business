import React from "react";
import styled from "styled-components";

const Arcteryx = () => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper>
          <CompanyLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610832013/Business%20website/Work/arcteryx_nzovbc.png"
            alt="Arc'teryx"
          />
          <Main>
            <Company>Arc'teryx Montréal</Company>
            <JobTitle>
              Content Creator | 2017 - 2020 | Montreal, Canada
            </JobTitle>
            <Description>
              Produced content for social media and marketing campaigns
            </Description>
            <Description>
              Established a creative direction aligned with the brand image
            </Description>
            <JobTitleSecond>
              Sales assistant | 2017 - 2019 | Montreal, Canada
            </JobTitleSecond>
            <Description>
              Developed extensive knowledge of outdoor technical clothing
            </Description>
            <Description>
              Understood client needs and offered appropriate solutions
            </Description>
            <Description>Use of “Meerkat” selling technique</Description>
            <Description>
              Developed teamwork, punctuality and adaptation skills
            </Description>
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
