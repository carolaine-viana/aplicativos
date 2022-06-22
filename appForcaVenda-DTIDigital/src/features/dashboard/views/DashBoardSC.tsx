import styled from 'styled-components/native';
import { FlexCenter } from '@shared/components';
import { Pressable, ScrollView } from 'react-native';

const Wrapper = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.light};
`;

const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
})``;

const Content = styled.View`
  margin-top: 24px;
  padding: 0 32px 27px 32px;
  width: 327px;
`;

const DashContent = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const ContainerCards = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
  flex-wrap: wrap;
`;

const CardContent = styled(Pressable)`
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 48%;
  border-radius: 16px;
  margin: 8px 0px;
  background-color: ${(props) => props.theme.palette.white};
`;

const IconCardContainter = styled(FlexCenter)`
  max-height: 54px;
  width: 54px;
  border-radius: 16px;
  margin-bottom: 6px;
`;

export {
  DashContent,
  Content,
  Container,
  Wrapper,
  ContainerCards,
  CardContent,
  IconCardContainter,
};
