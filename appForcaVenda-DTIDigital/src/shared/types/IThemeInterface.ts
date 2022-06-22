export interface IPalette {
  black: string;
  white: string;
  white50: string;
  blue50: string;
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue600: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  green50: string;
  green400: string;
  green600: string;
  green700: string;
  green800: string;
  orange600: string;
  orange500: string;
  orange300: string;
  orange100: string;
  red600: string;
  red200: string;
  red100: string;
  red50: string;
  yellow600: string;
  yellow400: string;
  yellow50: string;
  background: IBackground;
  text: IText;
  button: IButton;
  spinner: ISpinner;
}

export interface IBackground {
  default: string;
  dark: string;
  light: string;
}

export interface IText {
  light: string;
  default: string;
  primary: string;
  secondary: string;
  header: string;
  error: string;
  alert: string;
  success: string;
}

export type TPaletteKeyColors = keyof Omit<IPalette, 'background' | 'text' | 'button' | 'spinner'>;
export interface IButton {
  disabled: string;
  primary: string;
  secondary: string;
  light: string;
  delete: string;
}
export interface ISpinner extends Partial<IButton> {
  light: string;
  primary: string;
  secondary: string;
  disabled: string;
  delete: string;
}

export interface IFontFamily {
  fontFamily?: string;
  fontStyle: string;
  lineHeight: string;
  fontWeight?: number | string;
  fontSize: string;
}

export interface ITypography {
  fontFamily: string;
  header: IFontFamily;
  title: IFontFamily;
  titleMedium: IFontFamily;
  titleLarge: IFontFamily;
  lead: IFontFamily;
  leadBody: IFontFamily;
  leadMedium: IFontFamily;
  body: IFontFamily;
  bodyMedium: IFontFamily;
  button: IFontFamily;
  overline: IFontFamily;
  overlineMedium: IFontFamily;
  overlineSmall: IFontFamily;
  overlineM: IFontFamily;
}

export interface ILayout {
  marginMenu: string | number;
}

export default interface IThemeInterface {
  palette: IPalette;
  typography: ITypography;
  layout: ILayout;
}
