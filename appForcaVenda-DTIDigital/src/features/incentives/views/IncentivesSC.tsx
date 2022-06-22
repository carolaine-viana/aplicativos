import { DeviceFeatures } from 'shared/base';
import { Typography } from 'shared/components';
import styled from 'styled-components/native';

const ContainerWhite = styled.View`
  background-color: ${({ theme }) => theme.palette.white};
`;

export const CalendarButtonContainer = styled(ContainerWhite)`
  margin: 30px 0 24px 0;
  width: 180px;
`;
export const DetailsContainer = styled(ContainerWhite)`
  align-items: center;
  padding-top: 8px;
`;

export const Title = styled(Typography)`
  padding: 16px 0;
`;

export const Description = styled(Typography)`
  padding: 0 16px 16px 16px;
`;

export const KeyValue = styled(Typography)`
  padding: 8px 16px;
`;

export const PerformanceItemContainer = styled.View`
  width: ${DeviceFeatures.dimensions.width}px;
  padding: 0 32px;
`;
export const PerformanceItemContent = styled.View`
  padding: 16px;
  box-sizing: border-box;
`;

export const PerformanceItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PerformanceItemText = styled.View`
  padding: 22px 22px 0px 0px;
`;

export const IncentiveSelectContainer = styled(ContainerWhite)`
  padding: 24px 0 16px 16px;
  align-items: center;
  flex-direction: row;
`;

export const EmptyWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
