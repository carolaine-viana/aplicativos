import styled from 'styled-components/native';
import Typography from '@shared/components/Typography/Typography';

interface ContainerProps {
  dark: any;
  light: any;
}

export const Container = styled.View<ContainerProps>`
  width: 80px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme, dark }) => theme.palette[dark]};
  border-radius: 12px;
  background-color: ${({ theme, light }) => theme.palette[light]};
`;

export const Text = styled(Typography)`
  text-transform: uppercase;
`;
