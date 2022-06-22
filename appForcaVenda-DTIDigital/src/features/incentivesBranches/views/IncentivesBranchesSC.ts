import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const ListContainer = styled.View`
  flex: 1;
  padding: 0 0 16px 0;
  justify-content: center;
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`
  background-color: ${(props) => props.theme.palette.white};
`;

export const ListItemWrapper = styled.View`
  margin-bottom: 16px;
`;
export const ListItem = styled.View`
  height: 90px;
  padding: 0 16px;
  justify-content: center;
`;
