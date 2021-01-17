import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiInstagram } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

import EmailJs from "./EmailJs";

const logoStyles = {
  height: "28px",
  width: "28px",
  color: "black",
};

const logoStylesContact = {
  color: "black",
  marginRight: "6px",
  paddingTop: "2px",
};

const Contact = () => {
  const contact = useSelector(
    (state) =>
      state.languageReducer.content && state.languageReducer.content.contact
  );

  return (
    <>
      <Wrapper>
        <Main>
          <Header>{contact.title}</Header>
          <Description>{contact.description}</Description>
          <Div>
            <EmailJs contact={contact} />
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
          <Div>
            <Footer>
              <ContactInfo>
                <FiMail style={logoStylesContact} /> mathieu.tranchida@gmail.com
              </ContactInfo>
              <ContactInfo>
                <FiPhone style={logoStylesContact} /> +1 (438) 927-7693
              </ContactInfo>
            </Footer>
          </Div>
          <Div>
            <Copyright>{contact.copyright}</Copyright>
          </Div>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1030px;
`;

const Header = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-top: 40px;
`;

const Footer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 385px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.div`
  margin: 5px 0px 35px 0px;
`;

export default Contact;
