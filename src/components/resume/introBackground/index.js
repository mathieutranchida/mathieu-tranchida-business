import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Index = () => {
  const introHeader = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.introHeader
  );

  return (
    <>
      <Wrapper>
        <Opacity />
      </Wrapper>
      <Animation>
        <Slash>/</Slash>
        <Position>
          <IntroHeader>{introHeader}</IntroHeader>
        </Position>
      </Animation>
      <IntroHeaderSmartphone>{introHeader}</IntroHeaderSmartphone>
    </>
  );
};

const Wrapper = styled.div`
  height: 95vh;
  background-image: url("https://res.cloudinary.com/dldqebddc/image/upload/v1611028637/Business%20website/Background%20photo/Canmore_2019April29_LD_2_of_4_pynqzl.jpg");
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  box-shadow: 0px 0px 15px 5px black;
`;

const Opacity = styled.div`
  background-color: black;
  height: 95vh;
  width: 100vw;
  opacity: 0.15;
`;

const Animation = styled.div`
  position: absolute;
  z-index: 1;
  top: 72vh;
  padding: 20px 75px;
  background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  user-select: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1150px) {
    font-size: 15pt;
    padding: 20px 20px 20px 40px;
  }
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 1850px) {
    left: 5vw;
    top: 75vh;
  }
`;

const Slash = styled.div`
  font-size: 35pt;
  font-weight: 800;
  color: white;
  text-shadow: 0px 0px 7px black;
  animation: 6s ease-out animation-slash;

  @keyframes animation-slash {
    0% {
      opacity: 0;
      transform: translate3d(6em, 0, 0);
    }

    25% {
      opacity: 0;
      transform: translate3d(6em, 0, 0);
    }

    35% {
      opacity: 1;
    }

    40% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 1150px) {
    font-size: 30pt;
  }
`;

const Position = styled.div`
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, -5% 100%);
  position: relative;
  left: -10px;
  z-index: 2000;
`;

const IntroHeader = styled.div`
  font-size: 20pt;
  font-weight: 700;
  color: white;
  padding-left: 25px;
  animation: 5.5s ease-in-out animation-text;
  z-index: -1;
  @keyframes animation-text {
    0% {
      transform: translateX(-150%);
    }
    30% {
      transform: translateX(-150%);
    }
    70% {
      transform: translateX(0%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-width: 1150px) {
    font-size: 15pt;
  }
`;

const IntroHeaderSmartphone = styled.div`
  position: absolute;
  z-index: 1;
  top: 67vh;
  left: 50vw;
  width: 80vw;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14pt;
  text-align: center;
  font-weight: 700;
  -webkit-filter: drop-shadow(0px 0px 15px black);
  filter: drop-shadow(0px 0px 15px black);
  @media (min-width: 751px) {
    display: none;
  }
`;

export default Index;
