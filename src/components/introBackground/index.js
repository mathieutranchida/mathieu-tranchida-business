import React from "react";
import styled from "styled-components";

const Index = () => {
  return (
    <>
      <Wrapper />
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

export default Index;
