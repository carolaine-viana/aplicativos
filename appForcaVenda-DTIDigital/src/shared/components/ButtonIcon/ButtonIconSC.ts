import styled from 'styled-components/native';
import Typography from '../Typography/Typography';

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.palette.blue600};
  flex-direction: row;
  padding: 14px 35px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography)`
  margin-left: 18px;
`;
