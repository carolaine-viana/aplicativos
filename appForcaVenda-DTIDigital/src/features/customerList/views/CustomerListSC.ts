import { Dimensions, VirtualizedList } from 'react-native';
import styled from 'styled-components/native';

export const CustomersList = styled(VirtualizedList).attrs({
  contentContainerStyle: {
    paddingBottom: 260,
  },
})``;

export const ContainerCards = styled.View`
  margin-top: 24px;
  padding: 0 16px;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.white};
  height: 100%;
  width: 100%;
`;

export const ButtonToTop = styled.Pressable`
  position: absolute;
  right: 16px;
  bottom: 24px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.palette.blue600};
  align-items: center;
  justify-content: center;
`;

export const ContainerSearchGlobal = styled.View`
  margin-top: ${Dimensions.get('screen').width * 0 - 1}px;
  padding: 24px 16px 0 16px;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  width: 100%;
  /* height: 54px; */
  justify-content: center;
  border-radius: 36px;
  border: 1px ${({ theme }) => theme.palette.blue100};
`;
