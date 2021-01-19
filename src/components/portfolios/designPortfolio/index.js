import React from "react";
import styled from "styled-components";

import Header from "./header";
import DesignGrid from "./designGrid";
import Footer from "../footer/index";

const PhotoPortfolio = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <DesignGrid />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default PhotoPortfolio;
