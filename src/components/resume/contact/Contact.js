import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "../../portfolios/footer/index";

import EmailJs from "./EmailJs";

const Contact = () => {
  const contact = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.contact
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
          <Footer />
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

export default Contact;
