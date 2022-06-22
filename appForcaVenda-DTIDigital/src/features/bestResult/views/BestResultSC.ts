import styled from 'styled-components/native';
import { Typography } from '@shared/components';

export const Container = styled.View`
  min-height: 200px;
`;

export const ModalWrapper = styled.View`
  padding: 80px 0;
  align-items: center;
`;

export const DateContainer = styled.View`
  padding: 6px 0 18px 0;
  align-items: center;
`;

export const InfoContainer = styled.View`
  padding-top: 16px;
  align-items: center;
`;
export const ModalTitle = styled(Typography)`
  margin-top: 8px;
`;

export const ModalDescription = styled(Typography)`
  margin-top: 8px;
`;

export const NumberClient = styled(Typography)`
  margin-top: 18px;
`;
