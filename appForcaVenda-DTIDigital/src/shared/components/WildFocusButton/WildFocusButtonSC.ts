import styled from 'styled-components/native';
import Typography from '@shared/components/Typography/Typography';

export const Container = styled.Pressable`
  width: 100%;
  border-radius: 16px;
  padding: 0px 36px 0 0;

  background-color: ${({ theme }) => theme.palette.blue50};

  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  width: 47px;
  height: 47px;
  border-radius: 16px;
  margin: 4px 0 4px 4px;

  background-color: ${({ theme }) => theme.palette.white};

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography)`
  margin-left: 16px;
`;
