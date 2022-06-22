import styled from 'styled-components/native';
import { DeviceFeatures } from '@shared/base';
import { Typography } from '@shared/components';
import { ScrollView } from 'react-native-gesture-handler';

export const StatementScrollView = styled(ScrollView).attrs({
  contentContainerStyle: { paddingBottom: 180 },
})``;

export const CardPaperContainer = styled.View`
  margin-bottom: 16px;
  padding: 0px 16px 0px 16px;
`;

export const Container = styled.View`
  padding: 0px 16px 0px 16px;
  background-color: ${(props) => props.theme.palette.white};
`;

export const WrappedContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerHistory = styled.View`
  width: 60%;
`;

export const ContainerValue = styled.View`
  width: 100%;
  margin-top: 12px;
`;

export const ContainerDate = styled.View``;

export const CardContent = styled.View`
  max-width: ${DeviceFeatures.dimensions.width}px;
  background-color: ${({ theme }) => theme.palette.white};
  align-items: center;
  justify-content: center;
  padding: 24px 24px 12px 24px;
`;

export const StatementRow = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;
export const CardPaperItem = styled.View`
  max-width: ${DeviceFeatures.dimensions.width - 100}px;
  /* padding: 26px 24px; */
`;

export const CardPaperRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ButtonIconContent = styled.View`
  padding: 32px 72px;
  background-color: ${(props) => props.theme.palette.white};
`;

export const ListMonth = styled.FlatList``;

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

export const CurrentMonthText = styled(Typography)`
  justify-content: center;
  text-align: center;
`;

export const ContainerDivider = styled.View`
  background-color: ${(props) => props.theme.palette.white};
  padding: 0px 15px 15px 0px;
  align-items: center;
  justify-content: center;
`;
