import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import DefaultIcon from '@shared/components/DefaultIcon/DefaultIcon';
import { Container, WrapperIcon, Text } from './WildFocusButtonSC';

interface Props {
  text: string;
  icon: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const WildFocusButton: React.FC<Props> = ({ text, icon, onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <WrapperIcon>
      <DefaultIcon name={icon} size={24} color="link" />
    </WrapperIcon>
    <Text variant="overlineM" color="blue300" bold>
      {text}
    </Text>
  </Container>
);

export default WildFocusButton;
