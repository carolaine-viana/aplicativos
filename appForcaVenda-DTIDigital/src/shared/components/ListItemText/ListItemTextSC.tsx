import styled from 'styled-components/native';
import { IPalette } from '@shared/types/IThemeInterface';
import Typography from '../Typography/Typography';

export const ListItemContent = styled.View<{ bg?: keyof IPalette }>`
  padding: 16px 0 16px 6px;
  background-color: ${(props) => props.theme.palette[props.bg] || props.theme.palette.blue50};
`;

export const ListItemTitle = styled(Typography)`
  padding: 0 6px;
`;
