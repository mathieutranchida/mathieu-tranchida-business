import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Footer = () => {
  const footer = useSelector(
    (state) =>
      state.languageReducer.state &&
      state.languageReducer.state.contact.copyright
  );

  return (
    <>
      <Wrapper>
        <Copyright>{footer}</Copyright>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.footer`
  margin: 20px 2.5vw 35px 2.5vw;
`;

const Copyright = styled.div`
  text-align: center;
`;

export default Footer;
