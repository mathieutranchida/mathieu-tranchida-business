import React from "react";
import styled from "styled-components";

const Cssc = () => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper>
          <CompanyLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610832013/Business%20website/Work/CSSC-Square-White_bgrsgs.png"
            alt="Freelance photography at Mathieu Tranchida"
          />
          <Main>
            <Company>Concordia Ski & Snowboard Club</Company>
            <JobTitle>President | 2018 - 2019 | Montreal, Canada</JobTitle>
            <Description>
              Run one of the most active clubs on campus with more than 500
              active members
            </Description>
            <Description>
              Planned and run over 20 yearly events including 10-day trips and
              two weekenders
            </Description>
            <Description>
              Managed a team of six executive - Developed leadership and
              teamwork skills
            </Description>
            <Description>
              Worked with external companies such as Red Bull and Orage
            </Description>
            <Description>
              Generated over $90,000 in sales throughout the year
            </Description>
            <Description>
              Oversaw the finance and marketing of the club
            </Description>
            <Description>
              Collaborated with other school associations
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

const Description = styled.div``;

export default Cssc;
