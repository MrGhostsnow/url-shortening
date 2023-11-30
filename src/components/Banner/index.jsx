// Banner.js
import React from "react";
import { ContainerBanner, Text, Button, SectionText } from "./styles";
import background from "../../assets/bg-boost-desktop.svg";

function Banner() {
  return (
    <ContainerBanner
      data-testid="container-banner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <SectionText>
        <Text>Boost your links today</Text>
        <Button>Get Started</Button>
      </SectionText>
    </ContainerBanner>
  );
}

export default Banner;
