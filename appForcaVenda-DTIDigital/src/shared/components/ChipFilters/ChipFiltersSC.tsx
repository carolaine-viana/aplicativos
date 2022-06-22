import styled from 'styled-components/native';
import { TPaletteKeyColors } from 'shared/types/IThemeInterface';
import { ScrollView } from 'react-native-gesture-handler';

export const ListChips = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const ChipItem = styled.View<{
  active?: boolean;
  first?: boolean;
  last?: boolean;
  activeColor?: TPaletteKeyColors;
}>`
  justify-content: center;
  height: 22px;
  padding: 0 16px;
  margin: 0;
  margin-left: ${({ first }) => (first ? '0' : '12px')}
  border-radius: 14px;
  background-color: ${({ theme, active, activeColor = 'blue300' }) =>
    active ? theme.palette[activeColor] : theme.palette.gray100};
`;
