import { Typography } from 'shared/components';
import theme from 'shared/constants/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${theme.palette.blue50};
  padding: 24px 16px 0px 0px;
`;

export const ContainerOrderBy = styled.View`
  padding: 16px 16px 0px 0px;
  background-color: ${theme.palette.blue50};
`;

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
  background-color: ${({ active }) => (active ? theme.palette.blue600 : theme.palette.gray100)};
`;
