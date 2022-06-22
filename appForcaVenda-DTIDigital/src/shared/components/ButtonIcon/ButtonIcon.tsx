import React from 'react';

import DefaultIcon from '../DefaultIcon/DefaultIcon';

import { Container, Text } from './ButtonIconSC';

interface ButtonIconProps {
  icon: string;
  text: string;
  onPress: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, text, onPress }) => (
  <Container onPress={onPress}>
    <DefaultIcon name={icon} color="light" size={24} />
    <Text variant="bodyMedium" color="white" uppercase>
      {text}
    </Text>
  </Container>
);

export default ButtonIcon;
