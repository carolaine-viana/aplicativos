import { DefaultTheme } from 'styled-components/native';

const theme: DefaultTheme = {
  layout: {
    marginMenu: 4,
  },
  palette: {
    black: '#000',
    white: '#fff',
    white50: '#F9F9F9',
    blue50: '#EAF3FF',
    blue100: '#B3D3FF',
    blue200: '#80B7FF',
    blue300: '#3289FF',
    blue400: '#006cff',
    blue600: '#072AD8',
    gray100: '#EDEEF0',
    gray200: '#D3D5DA',
    gray300: '#999DA9',
    gray400: '#838896',
    gray500: '#6D7384',
    gray600: '#595F70',
    gray700: '#3A4050',
    gray800: '#19202D',
    gray900: '#10151D',
    green50: '#E5F8EC',
    green400: '#3ACD77',
    green600: '#00B354',
    green800: '#008F3B',
    orange600: '#E75308',
    orange500: '#FF5D0B',
    orange300: '#FF8E54',
    orange100: '#FDC8AA',
    red600: '#E73933',
    red200: '#F09A99',
    red100: '#FFCDD2',
    red50: '#FFEBEE',
    yellow600: '#F9A900',
    yellow400: '#FFC500',
    yellow50: '#FFF7DE',

    background: {
      default: '#fff',
      dark: '#072AD8',
      light: '#EAF3FF',
    },

    text: {
      light: '#fff',
      default: '#10151D',
      primary: '#072AD8',
      secondary: '#999DA9',
      header: '#838896',
      error: '#E73933',
      alert: '#FFC500',
      success: '#3ACD77',
    },

    button: {
      primary: '#072AD8',
      secondary: '#FF5D0B',
      disabled: '#999DA9',
      light: '#D3D5DA',
      delete: '#E73933',
    },

    spinner: {
      light: '#ffffff',
      primary: '#072AD8',
      secondary: '#FF5D0B',
      disabled: '#999DA9',
      delete: '#E73933',
    },
  },

  typography: {
    fontFamily: 'Rubik-Regular',
    header: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '28px',
    },

    title: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '21px',
    },

    titleMedium: {
      fontFamily: 'Rubik-Medium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '21px',
    },

    titleLarge: {
      fontFamily: 'Rubik-Medium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '28px',
    },

    lead: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
    },

    leadBody: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19px',
    },

    leadMedium: {
      fontFamily: 'Rubik-Medium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
    },

    body: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
    },

    bodyMedium: {
      fontFamily: 'Rubik-Medium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
    },

    button: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '21px',
    },

    overline: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: '13px',
    },

    overlineMedium: {
      fontFamily: 'Rubik-Medium',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: '13px',
    },

    overlineSmall: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '13px',
    },

    overlineM: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '11px',
      lineHeight: '13px',
    },
  },
};

export default theme;
