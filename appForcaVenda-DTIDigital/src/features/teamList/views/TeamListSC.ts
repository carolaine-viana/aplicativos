import styled from 'styled-components/native';
import theme from 'shared/constants/theme';
import { VirtualizedList } from 'react-native';

export const CARD_HIGHT = 100;

export const Container = styled.SafeAreaView`
  background-color: ${theme.palette.blue50};
`;

export const ContainerCards = styled.View`
  padding: 16px 16px 0 16px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  background-color: ${theme.palette.blue50};
`;

export const TeamSelectContainer = styled.View`
  width: 100%;
  padding: 24px 0 16px 16px;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.palette.red100};
`;

export const ContainerHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background-color: ${theme.palette.blue50};
`;

export const ContainerCenterText = styled.View`
  margin-top: -24px;
`;
