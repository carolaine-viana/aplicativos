import { IPalette } from 'shared/types/IThemeInterface';
import styled from 'styled-components/native';

export interface ILineProps {
  width?: string;
  color?: keyof IPalette;
}

const DividerContainer = styled.View<{ noMarge: boolean }>`
  width: 100%;
  align-items: center;
  margin-top: ${(props) => (props.noMarge ? '0px' : '16px')};
`;

const Line = styled.View<ILineProps>`
  border-bottom-color: ${({ theme, color }) =>
    theme.palette[color as keyof IPalette] || theme.palette.gray200}
  border-bottom-width: 1px;
  width: ${({ width }) => width ?? '100%'};

`;

export { DividerContainer, Line };
