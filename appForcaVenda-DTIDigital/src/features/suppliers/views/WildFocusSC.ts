import styled from 'styled-components/native';
import { Typography, WildFocusButton } from '@shared/components';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  height: 100%;
`;

export const Content = styled.View`
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const FallbackContainer = styled.View`
  min-height: 260px;
`;

export const WeekWrapper = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const DashboardContent = styled.View`
  width: 100%;
  border-radius: 16px;
`;

export const RowData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  margin-bottom: 12px;
`;

export const RowDataAccumulated = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Label = styled(Typography)``;

export const Value = styled(Typography)``;

export const WildFocusWrapper = styled.View`
  padding: 32px 0 0;
  flex-direction: row;
`;

export const WildFocusButtonRight = styled(WildFocusButton)`
  margin-left: 16px;
`;

export const CalendarButtonContainer = styled.View`
  margin: 30px auto 24px;
  background-color: ${({ theme }) => theme.palette.white};
  width: 180px;
`;
