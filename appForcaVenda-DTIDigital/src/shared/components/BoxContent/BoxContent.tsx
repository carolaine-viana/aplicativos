import styled from 'styled-components/native';

import { IBackground } from '@shared/types/IThemeInterface';

interface BoxContentProps {
  width?: number;
  height?: number;
  bg?: keyof IBackground;
  radius?: number;
}

const BoxContent = styled.View<BoxContentProps>`
  background-color: ${({ theme, bg }) => (bg ? theme.palette.background[bg] : theme.palette.white)};
  overflow: hidden;
  width: ${({ width = 0 }) => width}px;
  height: ${({ height = 0 }) => height}px;
  border-radius: ${({ radius = 0 }) => radius}px;
`;

export default BoxContent;
