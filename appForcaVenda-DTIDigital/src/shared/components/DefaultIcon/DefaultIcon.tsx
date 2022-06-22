import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../constants/theme';

export type IconColors =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'pin'
  | 'light'
  | 'link'
  | 'blue'
  | 'error'
  | 'errorLight';
export interface DefaultIconProps {
  name: string;
  size: number;
  active?: boolean;
  color?: IconColors;
  activeColor?: 'primary' | 'secondary' | 'default';
}

const DefaultIcon: React.FC<DefaultIconProps> = (props) => {
  const { name, size = 24, color = 'default', active, activeColor = 'primary' } = props;
  return (
    <Icon name={name} size={size} color={active ? iconColors[activeColor] : iconColors[color]} />
  );
};

const iconColors = {
  primary: theme.palette.blue600,
  secondary: theme.palette.orange500,
  default: theme.palette.gray300,
  pin: theme.palette.red600,
  light: theme.palette.white,
  link: theme.palette.blue300,
  blue: theme.palette.blue100,
  error: theme.palette.red600,
  errorLight: theme.palette.red200,
};

export default DefaultIcon;
