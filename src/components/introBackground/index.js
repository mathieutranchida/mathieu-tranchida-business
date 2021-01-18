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
  background-image: url("https://res.cloudinary.com/dldqebddc/image/upload/v1610744599/Business website/Background photo/TignesNoel18_InternetQuality_2_of_5_teyw6n.jpg");
  background-size: cover;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  box-shadow: 0px 0px 15px 5px black;
`;

export default Index;
