import React from "react";
import {
  Container,
  Title,
  ButtonWrapped,
  ContainerIcon,
  WrappedButton,
} from "./styles";
import HeartButtonSvg from "../../assets/svgs/HeartButton.svg";
import BagButtonSvg from "../../assets/svgs/BagButton.svg";

interface Props {
  title: string;
  color?: string;
  type?: string;
  onPress: () => void;
}

export function ButtonDetail({ title, color, type, onPress, ...rest }: Props) {
  return (
    <WrappedButton>
      <Container {...rest} color={color} onPress={onPress}>
        <ButtonWrapped>
          {type === "HeartButton" ? (
            <ContainerIcon>
              <HeartButtonSvg />
            </ContainerIcon>
          ) : (
            <ContainerIcon>
              <BagButtonSvg />
            </ContainerIcon>
          )}
          <Title color={color}>{title}</Title>
        </ButtonWrapped>
      </Container>
    </WrappedButton>
  );
}
