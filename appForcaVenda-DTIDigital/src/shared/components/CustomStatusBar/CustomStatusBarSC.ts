import styled from 'styled-components/native';
import { StatusBar, StatusBarProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export interface StatusBarIOSProps extends StatusBarProps {
  backgroundColor: string;
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const STATUSBAR_HEIGHT_IOS = getStatusBarHeight();

export const Container = styled.View<StatusBarIOSProps>`
  height: ${STATUSBAR_HEIGHT}px;
  background-color: ${(props) => props.backgroundColor};
`;

export const ContainerIOS = styled.View<StatusBarIOSProps>`
  height: ${STATUSBAR_HEIGHT_IOS}px;
  background-color: ${(props) => props.backgroundColor};
  z-index: 3;
`;
