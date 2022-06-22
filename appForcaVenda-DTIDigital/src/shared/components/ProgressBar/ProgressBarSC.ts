import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { getIndicatorColor } from 'shared/utils';

export interface ProgressBarProps {
  step?: number;
  steps?: number;
  height?: number;
  color?: 'red600' | 'yellow400' | 'green400';
  fulfillment?: 'low' | 'high' | 'complete';
}

export const Container = styled.View`
  justify-content: center;
`;

export const ContainerProgress = styled.View<ProgressBarProps>`
  background-color: ${({ theme }) => theme.palette.gray200};
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  overflow: hidden;
`;

export const Progress = styled(Animated.View)<ProgressBarProps>`
  height: ${(props) => props.height}px;
  width: 100%;
  position: absolute;
  background-color: ${({ step, color, theme }) =>
    theme.palette[color] || getIndicatorColor(step).color};
  left: 0px;
  top: 0px;
  border-radius: ${(props) => props.height}px;
`;
