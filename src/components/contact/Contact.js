import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import EmailJs from "./EmailJs";

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
          <EmailJs contact={contact} />
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

const Description = styled.div`
  margin-top: 20px;
`;

export default Contact;
