import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Typography from '../Typography/Typography';

export const OptionItem = styled(TouchableOpacity)<{ active: boolean }>`
  background-color: ${({ active, theme }) => (active ? theme.palette.blue50 : theme.palette.white)};
`;
export const Label = styled(Typography)`
  padding: 16px 16px;
`;
