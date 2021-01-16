import React from "react";
import styled from "styled-components";

const FreelancePhotography = () => {
  return (
    <>
      <Wrapper>
        <CompanyWrapper>
          <CompanyLogo
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1610832013/Business%20website/Work/logo_j8oshm.png"
            alt="Freelance photography at Mathieu Tranchida"
          />
          <Main>
            <Company>Freelance photographer</Company>
            <JobTitle>
              Photographer | 2017 - 2021 | Canada & Switzerland
            </JobTitle>
            <Description>
              Mainly working on commercial and editorial projects related to
              extreme sports
            </Description>
            <Description>
              Client roaster include: Arc’teryx, 686, Allez-Up, Jackalope,
              Psicobloc and If3
            </Description>
            <Description>
              Published in: L’Équipe, Skipass, Gripped Magazine, The Ski
              Journal, and Downdays
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

export default FreelancePhotography;
