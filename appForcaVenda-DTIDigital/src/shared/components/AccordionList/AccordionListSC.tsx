import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ListItems = styled(ScrollView)``;

export const Container = styled.View`
  // some css style
  /* background-color: violet; */
  flex: 1;
  padding: 24px 16px 6px 16px;
`;
export const Content = styled.View`
  /* background-color: gray; */

  border-width: 1px;
  border-color: ${(props) => props.theme.palette.gray200};
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
`;
