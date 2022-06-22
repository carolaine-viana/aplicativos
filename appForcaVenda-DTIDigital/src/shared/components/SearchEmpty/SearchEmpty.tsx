import React from 'react';
import { Image } from 'react-native';

import searchEmptyImg from '@assets/images/search-not-found.png';

import { Container, Text } from './SearchEmptySC';

export interface SearchEmptyProps {
  message?: string;
  renderMessage?: () => void;
  testID?: string;
  margin?: number;
  imageSize?: number;
}
const SearchEmpty: React.FC<SearchEmptyProps> = ({
  renderMessage,
  message = 'Nenhuma busca \n encontrada',
  testID,
  margin,
  imageSize = 100,
}) => (
  <Container testID={testID}>
    <Image
      source={searchEmptyImg}
      style={{ width: imageSize, height: imageSize, marginTop: margin }}
    />
    <Text color="primary" variant="lead" bold>
      {renderMessage?.() || message}
    </Text>
  </Container>
);

export default SearchEmpty;
