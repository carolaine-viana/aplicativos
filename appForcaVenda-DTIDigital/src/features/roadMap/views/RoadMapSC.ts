import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';
import theme from '../../../shared/constants/theme';

export const RoadMapList = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingVertical: 24,
  },
})``;

const ContainerCards = styled.View`
  padding: 0 20px 80px;
  justify-content: center;
  background-color: ${theme.palette.white};
`;

const Container = styled.View`
  height: 100%;
  background-color: ${theme.palette.white};
`;
const DateContainer = styled.View`
  width: 40%;
  height: 20px;
  margin-top: 12px;
  border-radius: 4px;
  align-self: center;
  justify-content: center;
  background-color: ${theme.palette.blue100};
  margin-bottom: 24px;
  padding: 2px 2px 2px 2px;
`;

const DateText = styled.Text`
  font-size: 11px;
  font-family: 'Rubik-Light';
  font-weight: 400;
  text-align: center;
  color: ${theme.palette.gray500};
`;

const ModalContainer = styled.View`
  width: 156px;
  height: 156px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${theme.palette.blue600};
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
  line-height: 19px;
`;

const ContainerSearchGlobal = styled.View`
  background-color: #fff;
  margin-top: ${Dimensions.get('screen').width * 0 - 1}px;
  padding: 24px 16px 0 16px;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.View`
  width: 100%;

  justify-content: center;
  border-radius: 36px;
  border: 1px ${theme.palette.blue100}; ;
`;

export {
  ModalContainer,
  Container,
  ContainerCards,
  Title,
  DateContainer,
  DateText,
  ContainerSearchGlobal,
  SearchContainer,
};
