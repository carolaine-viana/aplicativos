import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Typography } from '@shared/components';

export const ListTitle = styled(Typography)`
  margin-top: 16px;
  background-color: ${(props) => props.theme.palette.white};
  padding: 0 30px;
`;

export const List = styled(FlatList).attrs({})``;
