import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Content, Text } from './LoadingSC';

export default function Loading(props: { testID?: string; hideBackgrop?: boolean }) {
  return (
    <Container testID={props.testID} hideBackgrop={props.hideBackgrop}>
      <Content>
        <ActivityIndicator color="#fff" size="large" />
        <Text variant="lead" color="light">
          Carregando...
        </Text>
      </Content>
    </Container>
  );
}

Loading.defaultProps = {
  testID: '',
  hideBackgrop: false,
};
