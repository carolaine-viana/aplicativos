import React, { PropsWithChildren } from 'react';
import TypographySC, { TypographySCProps, TextProps } from './TypographySC';

const Typography = (props: PropsWithChildren<TypographySCProps & TextProps>) => (
  <TypographySC {...props}>{props.children ?? props.fallbackText}</TypographySC>
);

Typography.defaultProps = {
  fallbackText: '',
  color: 'default',
  variant: 'header',
};

export default Typography;
