import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled.View`
  padding: 24px 24px;
  background-color: ${({ theme }) => theme.palette.background.light};
  height: 100%;
`;

const ContainerDetail = styled.View`
  padding: 46px 16px;
  width: 326px;
`;

const ColumnContent = styled.View`
  margin-bottom: 27px;
`;

const EstimateContainer = styled.View``;

const ValueContent = styled.View`
  margin-top: 6px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export { ColumnContent, Container, ContainerDetail, ValueContent, EstimateContainer, SafeArea };
