import styled from 'styled-components/native';
import { DeviceFeatures } from '@shared/base';
import Typography from '../Typography/Typography';

const Container = styled.View`
  flex: 1;
  padding: 28px 16px 16px 16px;
  background-color: ${(props) => props.theme.palette.white};
`;

const CardContent = styled.View`
  max-width: ${DeviceFeatures.dimensions.width}px;
  background-color: ${({ theme }) => theme.palette.white};
  align-items: center;
  justify-content: center;
  padding: 36px 24px;
`;

const StatementRow = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const CardPaperContainer = styled.View`
  margin-bottom: 16px;
`;

const CardPaperItem = styled.View`
  max-width: ${DeviceFeatures.dimensions.width - 100}px;
  padding: 26px 24px;
`;

const CardPaperRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const ButtonIconContent = styled.View`
  padding: 32px 72px;
  background-color: ${(props) => props.theme.palette.white};
`;

const RadioButtonContainer = styled.Pressable`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  width: 40%;
`;

const ListMonthContainer = styled.View`
  height: 90%;
  width: 100%;
`;

const ListMonth = styled.FlatList``;

const ButtonToTop = styled.Pressable`
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

const ListMonthContainerTitle = styled(Typography)`
  margin-bottom: 32px;
`;

const CurrentMonthText = styled(Typography)`
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;
`;

const ContainerDivider = styled.View`
  background-color: ${(props) => props.theme.palette.white};
  padding: 0 24px;
`;

export {
  Container,
  CardContent,
  StatementRow,
  CardPaperContainer,
  CardPaperItem,
  CardPaperRow,
  ButtonIconContent,
  RadioButtonContainer,
  ListMonthContainer,
  ListMonth,
  ButtonToTop,
  CurrentMonthText,
  ListMonthContainerTitle,
  ContainerDivider,
};
