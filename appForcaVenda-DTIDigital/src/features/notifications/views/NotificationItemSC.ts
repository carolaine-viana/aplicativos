import styled from 'styled-components/native';
import { Typography } from '@shared/components';

export const Container = styled.Pressable`
  padding: 24px;
`;
export const Title = styled(Typography)`
  margin-bottom: 8px;
  line-height: 17px;
`;
export const Description = styled(Typography)`
  margin-bottom: 8px;
  line-height: 13px;
`;
export const ContainerDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: -8px;
`;
export const Date = styled(Typography)`
  margin-right: 8px;
`;
export const Hour = styled(Typography)``;

export const ContainerIcon = styled.View`
  margin-left: 6px;
`;
