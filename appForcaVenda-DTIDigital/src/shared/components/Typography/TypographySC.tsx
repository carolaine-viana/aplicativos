import { IPalette, ITypography, IText } from 'shared/types/IThemeInterface';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';

export default styled.Text<TypographySCProps>`
  ${({ theme, bold = false, variant = 'header', color = 'default', size, align, uppercase }) => {
    const { typography, palette } = theme;
    return {
      'font-family': getFontFamily(typography, variant, bold),
      'line-height': typography[variant].lineHeight,
      'font-size': size || typography[variant].fontSize,
      'text-align': align || typography[variant].textAlign,
      color:
        palette.text[color as keyof IText] || palette[color as keyof IPalette] || palette.black,
      'text-transform': uppercase ? 'uppercase' : 'none',
    };
  }}
`;

const getFontFamily = (typography: ITypography, variant: keyof ITypography, bold: boolean) => {
  if (bold) {
    return 'Rubik-Bold';
  }
  if (variant && typography[variant].fontFamily) {
    return typography[variant].fontFamily;
  }
  return typography.fontFamily;
};

export type TTextColor =
  | 'light'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'header'
  | 'error'
  | 'alert'
  | 'success'
  | keyof IText
  | keyof IPalette;
export interface TypographySCProps extends TextProps {
  bold?: boolean;
  variant?: keyof ITypography;
  color?: TTextColor;
  size?: number;
  marginTop?: number;
  align?: string;
  uppercase?: boolean;
}

export interface TextPropsItem {
  fallbackText: string;
}
