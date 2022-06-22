import styled from 'styled-components/native';
import { Typography } from '@shared/components';

export const Container = styled.Pressable`
  padding: 30px 16px 0px 16px;
  background-color: ${({ theme }) => theme.palette.white};
  flex: 1;
`;
export const Title = styled(Typography)`
  margin-bottom: 12px;
  line-height: 22px;
`;
export const Description = styled(Typography)`
  margin-bottom: 38px;
  line-height: 13px;
`;

export const DownloadButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: 52px;
  border-radius: 4px;
  padding: 14px 35px;
  background-color: ${({ theme }) => theme.palette.blue600};
  justify-content: space-between;
`;

export const ContainerButton = styled.View`
  padding: 0 25%;
`;
