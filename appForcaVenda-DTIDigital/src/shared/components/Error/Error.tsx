import React from 'react';
import warningImg from '@assets/images/warning.png';

import { Container, WarningImage, Text } from './ErrorSC';

export interface IErrorProps {
  message?: string;
  action?: string;
  testID?: string;
}

export default function Error(props: IErrorProps) {
  return (
    <Container testID={props.testID}>
      <WarningImage source={warningImg} />
      <Text variant="lead" color="primary">
        {props.message}
      </Text>
      <Text variant="lead" color="primary" bold>
        {props.action}
      </Text>
    </Container>
  );
}

Error.defaultProps = {
  message: 'Erro!',
  action: 'Reinicie o APP',
};
