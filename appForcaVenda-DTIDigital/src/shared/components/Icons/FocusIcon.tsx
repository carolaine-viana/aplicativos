import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from 'shared/constants/theme';

interface FocusIconProps {
  stroke?: string;
  width?: string;
  height?: string;
}

const FocusIcon: React.FC<FocusIconProps> = ({
  stroke = theme.palette.gray200,
  width = 40,
  height = 39,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 40 39"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.647 36.52c9.969 0 18.05-7.834 18.05-17.498 0-9.663-8.081-17.497-18.05-17.497-9.97 0-18.051 7.834-18.051 17.497 0 9.664 8.082 17.497 18.05 17.497z"
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.222 29.932c5.982 0 10.83-4.7 10.83-10.498 0-5.798-4.848-10.498-10.83-10.498-5.981 0-10.83 4.7-10.83 10.498 0 5.798 4.849 10.498 10.83 10.498z"
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.647 22.522c1.994 0 3.61-1.567 3.61-3.5 0-1.932-1.616-3.5-3.61-3.5-1.994 0-3.61 1.568-3.61 3.5 0 1.933 1.616 3.5 3.61 3.5z"
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FocusIcon;
