import styled from 'styled-components/native';
import Typography from '../Typography/Typography';

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
