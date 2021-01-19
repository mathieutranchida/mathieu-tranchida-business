import React from "react";
import styled from "styled-components";

const DesignGrid = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/5_ubbz4q.jpg"
            alt="design portfolio image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/12_ccfgja.jpg"
            alt="design portfolio image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/01_qvx5iw.jpg"
            alt="design portfolio image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069433/Business%20website/Design%20portfolio/03_tueguy.jpg"
            alt="design portfolio image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/01_qvx5iw.jpg"
            alt="design portfolio image"
          />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 31px - 16px - 35px - 20px - 15px);
  padding: 0px 15px;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  max-width: 1000px;
  margin-top: 43px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: cover;
  display: block;
  user-select: none;
  margin: 15px auto;
`;

export default DesignGrid;
