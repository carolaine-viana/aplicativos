import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Container, Text } from './BadgeSC';

export type TBadgeColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface Props {
  text: string;
  color: TBadgeColors;
  style?: StyleProp<ViewStyle>;
}

const colors = {
  primary: {
    dark: 'blue600',
    light: 'blue100',
    text: 'blue600',
  },
  secondary: {
    dark: 'orange600',
    light: 'orange100',
    text: 'orange600',
  },
  success: {
    dark: 'green800',
    light: 'green50',
    text: 'green800',
  },
  danger: {
    dark: 'red600',
    light: 'red100',
    text: 'red600',
  },
  warning: {
    dark: 'yellow600',
    light: 'yellow50',
    text: 'yellow600',
  },
  info: {
    dark: 'blue300',
    light: 'blue50',
    text: 'blue300',
  },
};

const Badge: React.FC<Props> = ({ text, color, style }) => (
  <Container style={style} dark={colors[color].dark} light={colors[color].light}>
    <Text variant="overlineMedium" color={colors[color].text}>
      {text}
    </Text>
  </Container>
);

export default Badge;
