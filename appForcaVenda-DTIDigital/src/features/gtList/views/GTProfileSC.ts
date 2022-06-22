import styled from 'styled-components/native';
import { FlexCenter } from '@shared/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(FlexCenter)`
  padding: 24px 16px;
`;

export const IconContainer = styled.TouchableOpacity`
  z-index: 2;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
