import React from 'react';
import theme from 'shared/constants/theme';
import { IPalette } from 'shared/types/IThemeInterface';
import { CustomStatusBarProps, CustomStatusBar } from '../CustomStatusBar/CustomStatusBar';

interface DefaultScreenProps extends Partial<CustomStatusBarProps> {
  statusBarColor?: keyof IPalette;
}

const DefaultScreen: React.FC<DefaultScreenProps> = ({ children, statusBarColor, barStyle }) => (
  <>
    <CustomStatusBar
      backgroundColor={statusBarColor ? (theme.palette[statusBarColor] as string) : 'white'}
      barStyle={barStyle ?? 'dark-content'}
    />
    {children}
  </>
);

export default DefaultScreen;
