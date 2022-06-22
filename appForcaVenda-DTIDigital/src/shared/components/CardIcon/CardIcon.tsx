import React from 'react';
import { TPaletteKeyColors } from 'shared/types/IThemeInterface';
import { CardContent, IconCardContainer } from './CardIconSC';
import Typography from '../Typography/Typography';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

interface CardIconProps {
  iconName: string;
  label: string;
  innerColor?: 'default' | 'light';
  outerColor?: TPaletteKeyColors;
  action: () => void;
  testID?: string;
}

const CardIcon: React.FC<CardIconProps> = ({
  iconName,
  label,
  innerColor,
  outerColor,
  action,
  testID = '',
}) => (
  <CardContent onPress={action} outerColor={outerColor ?? 'blue50'} testID={testID}>
    <IconCardContainer bg={innerColor ?? 'default'}>
      {iconName && <DefaultIcon name={iconName} size={24} color="primary" />}
    </IconCardContainer>
    <Typography variant="body" color="gray900">
      {label}
    </Typography>
  </CardContent>
);

export default CardIcon;
