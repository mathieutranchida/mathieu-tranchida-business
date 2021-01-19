import React from "react";
import styled from "styled-components";

import PhotoGrid from "./photoGrid";
import Header from "./header";

const PhotoPortfolio = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <PhotoGrid />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default PhotoPortfolio;
