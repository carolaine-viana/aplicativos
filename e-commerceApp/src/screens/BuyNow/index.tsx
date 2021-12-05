import React from "react";
import { Header } from "../../components/Header";
import {
  ImageBackground,
  ContainerDescription,
  Title,
  Price,
  Footer,
} from "./styles";
import Image from "../../assets/img6.png";
import { Button } from "../../components/Button";

export function BuyNow() {
  return (
      <>
      <ImageBackground
        source={Image}
      >
          <Header/>
      </ImageBackground>

          <ContainerDescription>
              <Title>Crew Neck T-shirt</Title>
              <Price>$79.90</Price>
          </ContainerDescription>
        
        <Footer>
            <Button title="Buy now"/>
        </Footer>
      </>
  );
}
