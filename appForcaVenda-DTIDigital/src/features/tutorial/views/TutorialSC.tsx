import styled from 'styled-components/native';
import { FlexCenter } from '@shared/components/FlexBox/FlexBox';
import { TouchableButton, Typography } from '@shared/components';
import { TouchableOpacity } from 'react-native';

export const IconContainter = styled(FlexCenter)`
  max-height: 54px;
  width: 54px;
  border-radius: 16px;
  margin-bottom: 6px;
`;

export const ModalContent = styled.View`
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const ModalContentButton = styled(TouchableButton)`
  margin: 26px 0 56px 0;
`;

export const FeatureName = styled(Typography)`
  margin: 12px 0;
`;

export const TutoDetailsContainer = styled(FlexCenter)`
  background-color: ${({ theme }) => theme.palette.gray100};
`;

export const TutoDetailsContent = styled.View`
  background-color: transparent;
  align-items: center;
`;

export const TutoDetailsInfoText = styled(Typography)`
  margin-bottom: 42px;
  margin-top: 102px;
  width: 100%;
`;

export const TutoHeader = styled.View`
  background-color: transparent;
  width: 100%;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

export const TutoDetailsIconClose = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
`;
