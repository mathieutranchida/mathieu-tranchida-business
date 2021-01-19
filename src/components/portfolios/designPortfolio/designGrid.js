import React from "react";
import styled from "styled-components";

const DesignGrid = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <ImageHorizontal
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/5_ubbz4q.jpg"
            alt="design portfolio image"
          />
          <ImageHorizontal
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/12_ccfgja.jpg"
            alt="design portfolio image"
          />
          <ImageSquare
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611074469/Business%20website/Design%20portfolio/13_v5zcc4.jpg"
            alt="design portfolio image"
          />
          <ImageHorizontal
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069436/Business%20website/Design%20portfolio/10_ho5vot.jpg"
            alt="design portfolio image"
          />
          <ImageVertical
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/01_qvx5iw.jpg"
            alt="design portfolio image"
          />
          <ImageHorizontal
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069435/Business%20website/Design%20portfolio/11_yojqv6.jpg"
            alt="design portfolio image"
          />
          <ImageSquare
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069433/Business%20website/Design%20portfolio/03_tueguy.jpg"
            alt="design portfolio image"
          />
          <ImageHorizontal
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069433/Business%20website/Design%20portfolio/04_nfqu3z.png"
            alt="design portfolio image"
          />
          <ImageVertical
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1611069434/Business%20website/Design%20portfolio/09_cngy89.jpg"
            alt="design portfolio image"
          />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 58px - 71px);
  padding: 0px 15px;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  max-width: 1000px;
  margin-top: 43px;
  @media (max-width: 1000px) {
    margin: 81px 0px 0px 0px;
  }
`;

const ImageHorizontal = styled.img`
  max-width: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  margin: 15px auto;
`;

const ImageVertical = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: cover;
  display: block;
  user-select: none;
  margin: 15px auto;
`;

const ImageSquare = styled.img`
  max-width: 100%;
  max-height: 57.8vh;
  object-fit: cover;
  display: block;
  user-select: none;
  margin: 15px auto;
`;

export default DesignGrid;
