import React from 'react';
import { Image } from 'react-native';

import trashImg from '@assets/images/trash.png';
import { Container, Text } from './DeletedSC';

interface DeletedProps {
  message?: string;
}

const Deleted: React.FC<DeletedProps> = ({ message = 'Excluído!' }) => (
  <Container>
    <Image source={trashImg} />
    <Text color="primary" variant="lead">
      {message}
    </Text>
  </Container>
);

export default Deleted;
