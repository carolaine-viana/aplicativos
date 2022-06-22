import styled from 'styled-components/native';
import theme from 'shared/constants/theme';
import { Typography } from '@shared/components';

interface DefaultButtonProps {
  primary?: Boolean;
}

export const Container = styled.View`
  border-radius: 17px;
  margin-bottom: 16px;
  background-color: ${theme.palette.white};
  padding: 0px 8px 0px 8px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px 28px 20px;
  margin-top: -30px;
`;

export const DefaultButton = styled.TouchableOpacity<DefaultButtonProps>`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${theme.palette.blue600};
  align-items: center;
  justify-content: center;
  background-color: ${({ primary }) => (primary ? theme.palette.blue600 : 'white')};
`;

export const ButtonText = styled(Typography)<DefaultButtonProps>`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: ${({ primary }) => (primary ? theme.palette.white : theme.palette.blue600)};
  font-weight: bold;
`;
