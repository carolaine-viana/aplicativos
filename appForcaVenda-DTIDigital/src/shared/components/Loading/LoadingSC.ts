import styled from 'styled-components/native';
import Typography from '@shared/components/Typography/Typography';

export const Container = styled.View<{ hideBackgrop?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.hideBackgrop ? 'transparent' : '#6a6a6a')};
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.palette.blue600};
  width: 224px;
  height: 192px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography)`
  margin-top: 8px;
`;
