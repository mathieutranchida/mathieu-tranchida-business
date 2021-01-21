import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { receiveNewLanguage } from "../../../redux/actions";
import { en, fr } from "../../../languages";

const LanguageSelector = () => {
  const currentLanguage = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.currentLanguage
  );

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        {currentLanguage === "english" ? (
          <Button
            aria-label="switch to French - Changer vers langue française"
            onClick={() => {
              dispatch(receiveNewLanguage(fr));
            }}
          >
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610818136/Business%20website/Skills/Languages/1200px-Flag_of_France.svg_ehv8dr.png"
              alt="French - Français"
            />
          </Button>
        ) : (
          <Button
            aria-label="switch to English - Changer vers langue Anglaise"
            onClick={() => {
              dispatch(receiveNewLanguage(en));
            }}
          >
            <Logo
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1610818136/Business%20website/Skills/Languages/download_n266lb.png"
              alt="English - Anglais"
            />
          </Button>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px 0px 0px 0px;
  width: 40px;
  height: 20px;
  margin-top: 3px;
  margin-left: 20px;
`;

export default LanguageSelector;
