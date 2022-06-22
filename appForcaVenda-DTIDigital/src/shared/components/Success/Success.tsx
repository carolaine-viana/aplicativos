import React from 'react';
import { Image } from 'react-native';
import successImg from '@assets/images/success.png';
import { Container, Text } from './SuccessSC';

interface Props {
  message: string;
}

export default function Success({ message }: Props) {
  return (
    <Container>
      <Image source={successImg} />
      <Text color="primary" variant="lead" align="center">
        {message}
      </Text>
    </Container>
  );
}
