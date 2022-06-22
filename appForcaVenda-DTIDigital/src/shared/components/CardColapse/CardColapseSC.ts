import { Animated } from 'react-native';
import styled from 'styled-components/native';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

export const CardContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palette.white};
  align-items: center;
  border-radius: 17px;
  padding: 12px 12px 24px 12px;
  margin-bottom: 16px;
  flex-grow: 1;
  justify-content: center;
`;

export const Content = styled(Animated.View)<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? 'auto' : 0)};
  width: ${(props) => (props.isOpen ? 'auto' : 0)};
  margin: 12px 0;
`;

export const ChevronIcon = styled(DefaultIcon)``;

export const BorderContainer = styled.View`
  flex-grow: 1;
`;

export const IconContainer = styled.Pressable`
  width: 100%;
  align-items: flex-end;
`;
