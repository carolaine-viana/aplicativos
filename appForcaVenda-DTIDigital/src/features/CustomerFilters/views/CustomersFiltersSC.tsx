import { Typography } from 'shared/components';
import styled from 'styled-components/native';

export const FiltersContainer = styled.View`
  width: 100%;
  background-color: transparent;
  padding: 16px 0 12px 0;
`;

export const SubFiltersContainer = styled(FiltersContainer)`
  padding-bottom: 0;
`;

export const SortLabel = styled(Typography)`
  margin-right: 6px;
`;

export const ChipSortContainer = styled.Pressable<{ active?: boolean }>`
  flex-direction: row;
  align-items: center;
  height: 22px;
  width: 84px;
  padding: 0 12px;
  border-radius: 14px;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.blue600 : theme.palette.gray100};
`;
