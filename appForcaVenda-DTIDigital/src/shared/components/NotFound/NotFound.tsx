import React from 'react';
import { Image } from 'react-native';

import roadmapImg from '@assets/images/roadmap-not-found.png';

import { Container, Text } from './NotFoundSC';

export default function NotFound() {
  return (
    <Container>
      <Image source={roadmapImg} />
      <Text color="primary" variant="lead" bold>
        Nenhum roteiro criado.
        {'\n'}
        Adicione clientes para
        {'\n'}
        criar o roteiro.
      </Text>
    </Container>
  );
}
