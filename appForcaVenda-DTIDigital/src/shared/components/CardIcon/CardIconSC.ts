import styled from 'styled-components/native';
import { TPaletteKeyColors } from 'shared/types/IThemeInterface';
import { FlexCenter } from '../FlexBox/FlexBox';

export const CardContent = styled.Pressable<{
  outerColor: TPaletteKeyColors;
}>`
  width: 156px;
  height: 138px;
  border-radius: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette[props.outerColor]};
`;
export const IconCardContainer = styled(FlexCenter)`
  width: 54px;
  max-height: 54px;
  border-radius: 16px;
  margin-bottom: 6px;
`;
