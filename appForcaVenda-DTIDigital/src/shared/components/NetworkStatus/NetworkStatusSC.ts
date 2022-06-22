import styled from 'styled-components/native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.green600};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${isIphoneX() ? 78 : 48}px;
  z-index: 4;
`;

export const ContainerOffline = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.red600};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${isIphoneX() ? 78 : 48}px;
  z-index: 4;
`;

// TODO: Usar Typography nos componentes de Text
export const Text = styled.Text`
  font-family: 'Rubik-Light';
  color: ${({ theme }) => theme.palette.white};
`;
