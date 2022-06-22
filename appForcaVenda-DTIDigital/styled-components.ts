import * as styledComponents from 'styled-components/native';
import IThemeInterface from './src/shared/types/IThemeInterface';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<IThemeInterface>;

export { css, ThemeProvider };
export default styled;
