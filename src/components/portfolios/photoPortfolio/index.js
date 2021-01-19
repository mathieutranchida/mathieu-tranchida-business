import React from "react";
import styled from "styled-components";

import PhotoGrid from "./photoGrid";

const PhotoPortfolio = () => {
  return (
    <>
      <Wrapper>
        <PhotoGrid />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default PhotoPortfolio;
