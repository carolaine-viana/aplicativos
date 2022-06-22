import { IPalette } from 'shared/types/IThemeInterface';
import theme from 'shared/constants/theme';
import styled from 'styled-components/native';

interface ContainerProps {
  selected: boolean;
  activeColor: keyof IPalette;
  disabled?: boolean | undefined;
}

export const Container = styled.Pressable<ContainerProps>`
  width: 102px;
  height: 42px;
  border-radius: 21px;
  padding: 14px 0px;
  background-color: ${({ disabled, activeColor, selected }) =>
    getColors(selected, disabled, activeColor)};
  align-items: center;
  justify-content: center;
`;

export const ContainerEmpty = styled.View`
  width: 102px;
  height: 42px;
`;

const getColors = (
  selected: boolean,
  disabled: boolean | undefined,
  activeColor: keyof IPalette = 'blue600'
) => {
  if (disabled) {
    return theme.palette.gray100;
  }
  return (activeColor && selected ? theme.palette[activeColor] : theme.palette.blue50) as IPalette;
};
