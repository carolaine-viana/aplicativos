import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput, Animated } from 'react-native';

interface ContainerProps {
  color: string;
}

export const ArrowContainer = styled.TouchableOpacity`
  height: 36px;
  width: 36px;
  justify-content: center;
`;

export const Container = styled(Animated.View)<ContainerProps>`
  width: 36px;
  height: 36px;
  background-color: ${({ theme, color }) => theme.palette[color]};
  border-radius: 30px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.palette.gray600,
}))`
  flex: 1;
  margin-right: 60px;
  margin-left: 20px;
  color: #000;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: transparent;
  position: absolute;
  right: 6px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const BoxSearch = styled.View`
  width: 36px;
  height: 36px;
  background-color: transparent;
  position: absolute;
  right: 6px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})<{ disabled: boolean }>`
  color: ${({ theme, disabled }) => (disabled ? theme.palette.gray300 : theme.palette.blue600)};
  font-size: 24px;
`;

export const CloseIcon = styled(Icon).attrs({
  name: 'x-circle',
})`
  color: ${({ theme }) => theme.palette.gray500};
  font-size: 22px;
`;
