import styled from 'styled-components/native';
import Typography from '@shared/components/Typography/Typography';
import { IBackground } from '@shared/types/IThemeInterface';

interface ContainerProps {
  bg: keyof IBackground;
}

const Container = styled.View<ContainerProps>`
  position: absolute;
  top: 0px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme, bg }) => theme.palette.background[bg]};
  justify-content: space-between;
  width: 100%;
  height: 49px;
  elevation: 3;
  box-shadow: 1.5px 1.5px 1.5px grey;
  padding: 0 10px;
  z-index: 3;
`;

const RightContainer = styled.View``;

const LeftContainer = styled.View`
  z-index: 2;
`;

const Title = styled(Typography)`
  position: absolute;
  text-align: center;
  justify-content: center;
  left: 0;
  right: 0;
`;

export { Container, RightContainer, LeftContainer, Title };
