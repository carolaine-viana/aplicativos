import styled from 'styled-components/native';
import { Typography } from 'shared/components';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 80,
    marginTop: 24,
  },
})`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Title = styled(Typography)`
  margin-bottom: 24px;
`;

export const ContainerButton = styled.View`
  margin-top: 42px;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled(Typography)`
  margin-top: 16px;
`;
