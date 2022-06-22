import { Typography } from 'shared/components';
import styled from 'styled-components/native';

export const WeeksFilterContainer = styled.View<{ isOpen: boolean }>`
  align-items: center;
`;

export const WeeksFilterWrapper = styled.View`
  width: 300px;
  align-items: center;
`;
export const WeeksFilterContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WeekChip = styled.View<{ selected?: boolean }>`
  align-items: center;
  width: 140px;
  justify-content: center;
  border-radius: 24px;
  padding: 10px;
  height: 40px;
  margin-bottom: 16px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.blue600 : theme.palette.gray200};
`;

export const ContainerFilters = styled.View`
  margin: 24px 0;
  align-items: center;
`;

export const MonthButtonContainer = styled.View`
  width: 175px;
  margin-bottom: 24px;
`;

export const SelectedWeekTag = styled.View`
  padding: 4px 14px;
  background-color: ${(props) => props.theme.palette.blue600};
  border-radius: 30px;
`;

export const SelectedWeekTagText = styled(Typography)``;

export const SelectSupplierContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 16px;
`;
