import React from "react";
import styled from "styled-components";

import PhotoGrid from "./photoGrid";
import Header from "./header";
import Footer from "../footer/index";

const PhotoPortfolio = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <PhotoGrid />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default PhotoPortfolio;
