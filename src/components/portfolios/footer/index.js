import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiInstagram } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  const footer = useSelector(
    (state) =>
      state.languageReducer.state &&
      state.languageReducer.state.contact.copyright
  );

  const logoStyles = {
    height: "23px",
    width: "23px",
    color: "black",
  };

  const logoStylesContact = {
    color: "black",
    marginRight: "6px",
    paddingTop: "2px",
  };

  return (
    <>
      <Wrapper>
        <Copyright>{footer}</Copyright>
        <Div>
          <ContactInfoDiv>
            <ContactInfo>
              <FiMail style={logoStylesContact} /> mathieu.tranchida@gmail.com
            </ContactInfo>
            <ContactInfo>
              <FiPhone style={logoStylesContact} /> +1 (438) 927-7693
            </ContactInfo>
          </ContactInfoDiv>
        </Div>
        <Div>
          <LogoDiv>
            <a
              href="https://www.linkedin.com/in/mathieutranchida/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn style={logoStyles} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGmail style={logoStyles} />
            </a>
            <a
              href="https://www.instagram.com/mathieutranchida/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiInstagram style={logoStyles} />
            </a>
          </LogoDiv>
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.footer`
  margin: 25px 2.5vw 25px 2.5vw;
`;

const ContactInfoDiv = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 385px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    width: inherit;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-top: 20px;
`;

const Copyright = styled.div`
  text-align: center;
`;

export default Footer;
