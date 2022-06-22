import React from 'react';
import { DividerContainer, Line, ILineProps } from './DividerSC';

interface DividerProps extends ILineProps {
  width?: string;
  noMarge?: boolean;
}

const Divider: React.FC<DividerProps> = ({ width, color, noMarge }) => (
  <DividerContainer noMarge={!!noMarge}>
    <Line width={width} color={color} />
  </DividerContainer>
);

export default Divider;
