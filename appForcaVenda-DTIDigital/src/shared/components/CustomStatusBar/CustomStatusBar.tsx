import React from 'react';
import { StatusBarProps, StatusBar } from 'react-native';
import { DeviceFeatures } from '@shared/base';
import { Container, ContainerIOS } from './CustomStatusBarSC';

export interface CustomStatusBarProps extends StatusBarProps {
  backgroundColor: string;
}

export const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor,
  barStyle,
  ...rest
}) => {
  StatusBar.setBarStyle(barStyle || 'light-content', true);
  return (
    <>
      {DeviceFeatures.isIOS ? (
        <ContainerIOS backgroundColor={backgroundColor} translucent {...rest} />
      ) : (
        <Container backgroundColor={backgroundColor}>
          <StatusBar translucent backgroundColor={backgroundColor} {...rest} />
        </Container>
      )}
    </>
  );
};

export default CustomStatusBar;
